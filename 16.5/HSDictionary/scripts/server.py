#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
VKC Item メソッドリファレンス - 開発サーバー
空きポートを自動選択し、ブラウザを自動起動します
管理画面用のAPI機能を含みます
"""

import http.server
import socketserver
import socket
import webbrowser
import os
import sys
import threading
import time
import json
import shutil
from datetime import datetime
from urllib.parse import unquote

# 設定
PORT_RANGE_START = 8000
PORT_RANGE_END = 8100
HOST = "localhost"
MAX_CONTENT_LENGTH = 10 * 1024 * 1024  # 10MB max

# 保存可能なJSONファイル（セキュリティのため明示的に指定）
ALLOWED_FILES = {
    "methods.json",
    "samples.json",
    "categories.json",
    "keywords.json",
    "related.json",
    "topics.json",
    "meta.json",
    "i18n.json"
}

# バックアップディレクトリ
BACKUP_DIR = "data/item/.backup"


def find_available_port(start: int, end: int) -> int:
    """空いているポートを探す"""
    for port in range(start, end):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind((HOST, port))
                return port
        except OSError:
            continue
    raise RuntimeError(f"ポート {start}-{end} の範囲で空きポートが見つかりませんでした")


def open_browser_delayed(url: str, delay: float = 1.0):
    """遅延してブラウザを開く（サーバー起動を待つため）"""
    def _open():
        time.sleep(delay)
        webbrowser.open(url)

    thread = threading.Thread(target=_open, daemon=True)
    thread.start()


def create_backup(filepath: str) -> str:
    """ファイルのバックアップを作成する"""
    if not os.path.exists(filepath):
        return None

    # バックアップディレクトリを作成
    os.makedirs(BACKUP_DIR, exist_ok=True)

    # タイムスタンプ付きのバックアップファイル名
    filename = os.path.basename(filepath)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_filename = f"{os.path.splitext(filename)[0]}_{timestamp}.json"
    backup_path = os.path.join(BACKUP_DIR, backup_filename)

    shutil.copy2(filepath, backup_path)
    return backup_path


class AdminHTTPHandler(http.server.SimpleHTTPRequestHandler):
    """管理画面API対応のHTTPハンドラ"""

    def send_json_response(self, data: dict, status: int = 200):
        """JSONレスポンスを送信"""
        response = json.dumps(data, ensure_ascii=False, indent=2)
        response_bytes = response.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", len(response_bytes))
        # CORS: localhost のみ許可
        origin = self.headers.get("Origin", "")
        if origin.startswith("http://localhost:") or origin.startswith("http://127.0.0.1:"):
            self.send_header("Access-Control-Allow-Origin", origin)
        self.end_headers()
        self.wfile.write(response_bytes)

    def do_GET(self):
        """GETリクエスト処理"""
        if self.path == "/api/data":
            self.handle_get_all_data()
        else:
            super().do_GET()

    def do_POST(self):
        """POSTリクエスト処理"""
        if self.path.startswith("/api/save/"):
            self.handle_save_file()
        else:
            self.send_json_response({"success": False, "error": "不明なエンドポイント"}, 404)

    def handle_get_all_data(self):
        """全JSONデータを取得"""
        try:
            data = {}
            data_dir = "data/item"

            print(f"[API] データ読み込み開始: {os.path.abspath(data_dir)}")

            if not os.path.exists(data_dir):
                self.send_json_response({
                    "success": False,
                    "error": f"データディレクトリが見つかりません: {data_dir}"
                }, 404)
                return

            loaded_files = []
            for filename in ALLOWED_FILES:
                filepath = os.path.join(data_dir, filename)
                if os.path.exists(filepath):
                    with open(filepath, "r", encoding="utf-8") as f:
                        key = os.path.splitext(filename)[0]
                        data[key] = json.load(f)
                        loaded_files.append(filename)

            print(f"[API] 読み込み完了: {len(loaded_files)}件 ({', '.join(loaded_files)})")
            self.send_json_response({"success": True, "data": data})
        except Exception as e:
            import traceback
            print(f"[ERROR] データ読み込み失敗: {traceback.format_exc()}")
            self.send_json_response({"success": False, "error": str(e)}, 500)

    def handle_save_file(self):
        """JSONファイルを保存"""
        try:
            # ファイル名を取得
            filename = unquote(self.path.replace("/api/save/", ""))

            # セキュリティチェック: 許可されたファイルのみ
            if filename not in ALLOWED_FILES:
                self.send_json_response({
                    "success": False,
                    "error": f"許可されていないファイル: {filename}"
                }, 403)
                return

            # パストラバーサル防止
            if ".." in filename or "/" in filename or "\\" in filename:
                self.send_json_response({
                    "success": False,
                    "error": "無効なファイル名"
                }, 400)
                return

            # リクエストボディを読み取り
            content_length = int(self.headers.get("Content-Length", 0))
            if content_length == 0:
                self.send_json_response({
                    "success": False,
                    "error": "リクエストボディが空です"
                }, 400)
                return

            # サイズ制限チェック（DoS対策）
            if content_length > MAX_CONTENT_LENGTH:
                self.send_json_response({
                    "success": False,
                    "error": f"リクエストが大きすぎます（最大{MAX_CONTENT_LENGTH // 1024 // 1024}MB）"
                }, 413)
                return

            body = self.rfile.read(content_length).decode("utf-8")

            # JSONとして解析（バリデーション）
            try:
                data = json.loads(body)
            except json.JSONDecodeError as e:
                self.send_json_response({
                    "success": False,
                    "error": f"無効なJSON形式: {e}"
                }, 400)
                return

            # ファイルパス
            filepath = os.path.join("data/item", filename)

            # バックアップを作成
            backup_path = create_backup(filepath)

            # ファイルに保存（アトミック書き込み）
            temp_filepath = filepath + ".tmp"
            with open(temp_filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)

            # 一時ファイルを本ファイルにリネーム
            os.replace(temp_filepath, filepath)

            response_data = {
                "success": True,
                "message": f"{filename} を保存しました",
                "backup": backup_path
            }
            self.send_json_response(response_data)

            print(f"[API] 保存完了: {filename}" + (f" (バックアップ: {backup_path})" if backup_path else ""))

        except Exception as e:
            import traceback
            print(f"[ERROR] Save failed for {filename}: {traceback.format_exc()}")
            self.send_json_response({
                "success": False,
                "error": "保存中にエラーが発生しました"
            }, 500)

    def log_message(self, format, *args):
        """ログ出力をカスタマイズ"""
        # APIリクエストは別途ログ出力しているので、静的ファイルのみ表示
        if not args[0].startswith(("POST /api", "GET /api")):
            super().log_message(format, *args)


def main():
    # プロジェクトルートに移動（scriptsフォルダの親）
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    os.chdir(project_root)

    # 空きポートを探す
    try:
        port = find_available_port(PORT_RANGE_START, PORT_RANGE_END)
    except RuntimeError as e:
        print(f"エラー: {e}")
        input("Enterキーを押して終了...")
        sys.exit(1)

    url = f"http://{HOST}:{port}/"

    print("=" * 50)
    print("VKC Item メソッドリファレンス - 開発サーバー")
    print("=" * 50)
    print()
    print(f"サーバーを起動しています... ポート: {port}")
    print(f"URL: {url}")
    print(f"管理画面: {url}admin.html")
    print()
    print("停止するには Ctrl+C を押してください")
    print("=" * 50)

    # ブラウザを自動で開く（少し遅延させる）
    open_browser_delayed(url, delay=0.5)

    # HTTPサーバー起動（カスタムハンドラを使用）
    try:
        with socketserver.TCPServer(("", port), AdminHTTPHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nサーバーを停止しました")
    except Exception as e:
        print(f"エラー: {e}")
        input("Enterキーを押して終了...")
        sys.exit(1)


if __name__ == "__main__":
    main()
