#!/usr/bin/env python3
"""
LDOC-1167: SDK16 PR質問表対応 - 回答生成システム

質問に対する回答を生成、管理するクラス。
TDD Green Phase: 最小実装でテストを通す。
"""

from typing import List, Dict, Any
from pathlib import Path


class AnswerGenerator:
    """回答を生成するクラス"""
    
    def __init__(self):
        """コンストラクタ"""
        pass
    
    def generate_template(self, category: str) -> str:
        """カテゴリに基づいて回答テンプレートを生成する
        
        Args:
            category: 質問のカテゴリ
            
        Returns:
            回答テンプレートの文字列
        """
        templates = {
            "feature": """## 機能概要

SDK16の新機能について説明します。

## 技術仕様

技術的な詳細を記載します。

## 使用例

実装例を示します。

## 注意事項

使用時の注意点を記載します。""",
            
            "compatibility": """## 互換性について

既存プロジェクトとの互換性について説明します。

## 移行手順

必要な移行手順を記載します。

## 注意事項

移行時の注意点を記載します。""",
            
            "default": """## 回答

質問への回答をここに記載します。

## 詳細

必要に応じて詳細な説明を追加します。"""
        }
        
        return templates.get(category, templates["default"])
    
    def generate_markdown_answer(self, question: Dict[str, Any], language: str = "ja") -> str:
        """質問からMarkdown形式の回答を生成する
        
        Args:
            question: 質問データ
            language: 言語 ("ja" または "en")
            
        Returns:
            Markdown形式の回答文字列
        """
        question_key = f"question_{language}"
        answer_key = f"answer_{language}"
        
        markdown_parts = []
        markdown_parts.append(f"# {question['id']}")
        markdown_parts.append("")
        markdown_parts.append("## 質問")
        markdown_parts.append(question.get(question_key, "質問が見つかりません"))
        markdown_parts.append("")
        markdown_parts.append("## 回答")
        
        answer = question.get(answer_key, "")
        if answer:
            markdown_parts.append(answer)
        else:
            # テンプレートを生成
            template = self.generate_template(question.get("category", "default"))
            markdown_parts.append(template)
        
        return "\n".join(markdown_parts)
    
    def validate_answer(self, answer: str, min_length: int = 10) -> bool:
        """回答内容の妥当性を検証する
        
        Args:
            answer: 回答文字列
            min_length: 最小文字数
            
        Returns:
            妥当性チェック結果
        """
        if not answer or len(answer.strip()) < min_length:
            return False
        return True
    
    def apply_answer_to_question(self, question: Dict[str, Any], answer: str, language: str = "ja") -> Dict[str, Any]:
        """質問に回答を適用する
        
        Args:
            question: 質問データ
            answer: 回答文字列
            language: 言語
            
        Returns:
            更新された質問データ
        """
        updated_question = question.copy()
        answer_key = f"answer_{language}"
        updated_question[answer_key] = answer
        updated_question["status"] = "answered"
        return updated_question
    
    def export_to_markdown_file(self, questions: List[Dict[str, Any]], output_file: str, language: str = "ja") -> None:
        """質問と回答をMarkdownファイルにエクスポートする
        
        Args:
            questions: 質問データのリスト
            output_file: 出力ファイルパス
            language: 言語
        """
        markdown_content = []
        markdown_content.append(f"# SDK16 PR 質問表 - 回答集")
        markdown_content.append("")
        
        for question in questions:
            question_key = f"question_{language}"
            answer_key = f"answer_{language}"
            
            markdown_content.append(f"## {question['id']}")
            markdown_content.append("")
            markdown_content.append("### 質問")
            markdown_content.append(question.get(question_key, "質問が見つかりません"))
            markdown_content.append("")
            markdown_content.append("### 回答")
            
            answer = question.get(answer_key, "")
            if answer:
                markdown_content.append(answer)
            else:
                markdown_content.append("*未回答*")
            
            markdown_content.append("")
            markdown_content.append("---")
            markdown_content.append("")
        
        # ファイルに書き出し
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("\n".join(markdown_content))