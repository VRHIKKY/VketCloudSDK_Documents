#!/usr/bin/env python3
"""
LDOC-1167: SDK16 PR質問表対応 - デモンストレーション

実装された機能のデモンストレーション用スクリプト
"""

import sys
from pathlib import Path

# パスを追加
sys.path.insert(0, str(Path(__file__).parent))

from questions.question_processor import QuestionProcessor
from answers.answer_generator import AnswerGenerator

def main():
    """メインデモンストレーション"""
    print("=== LDOC-1167 SDK16 PR質問表対応デモ ===\n")
    
    # 1. 質問データの読み込み
    print("1. 質問データの読み込み")
    processor = QuestionProcessor()
    
    questions_file = Path(__file__).parent / "questions" / "sdk16-questions.json"
    questions = processor.parse_questions_from_json(str(questions_file))
    
    # 2. 統計情報の表示
    print("\n2. 統計情報")
    stats = processor.get_statistics()
    print(f"総質問数: {stats['total']}")
    print(f"優先度別: {stats['by_priority']}")
    print(f"カテゴリ別: {stats['by_category']}")
    print(f"完了率: {stats['completion_rate']:.1f}%")
    
    # 3. フィルタリングデモ
    print("\n3. フィルタリングデモ")
    high_priority = processor.filter_by_priority(questions, "high")
    print(f"高優先度の質問: {len(high_priority)}件")
    
    feature_questions = processor.filter_by_category(questions, "feature")
    print(f"機能関連の質問: {len(feature_questions)}件")
    
    # 4. 回答生成デモ
    print("\n4. 回答生成デモ")
    generator = AnswerGenerator()
    
    if feature_questions:
        sample_question = feature_questions[0]
        print(f"サンプル質問: {sample_question['question_ja']}")
        
        # テンプレート生成
        template = generator.generate_template(sample_question['category'])
        print("\n生成されたテンプレート:")
        print(template[:200] + "..." if len(template) > 200 else template)
        
        # 回答適用
        sample_answer = "SDK16では新しいVKCコンポーネント体系が導入され、従来のHEOコンポーネントからの移行を支援する機能が追加されました。"
        updated_question = generator.apply_answer_to_question(
            sample_question, sample_answer, "ja"
        )
        print(f"\n回答適用後のステータス: {updated_question['status']}")
    
    # 5. Markdownエクスポートデモ
    print("\n5. Markdownエクスポート")
    markdown_content = processor.export_to_markdown(high_priority[:2], language="ja")
    print("生成されたMarkdown（先頭200文字）:")
    print(markdown_content[:200] + "...")
    
    print("\n=== デモ完了 ===")

if __name__ == "__main__":
    main()