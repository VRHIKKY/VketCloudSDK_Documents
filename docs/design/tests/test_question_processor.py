#!/usr/bin/env python3
"""
LDOC-1167: SDK16 PR質問表対応 - 質問処理テスト

TDD (Test Driven Development) アプローチによるテストケース。
実装前にテストを作成し、失敗することを確認した後に最小実装を行う。
"""

import unittest
import json
import os
from pathlib import Path

# テスト対象モジュールをインポート
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent.parent))

from questions.question_processor import QuestionProcessor


class TestQuestionProcessor(unittest.TestCase):
    """質問処理システムのテストクラス"""
    
    def setUp(self):
        """テスト前の準備処理"""
        self.test_data_dir = Path(__file__).parent / "test_data"
        self.test_data_dir.mkdir(exist_ok=True)
        
        # テスト用の質問データ
        self.sample_questions = {
            "questionnaire": {
                "version": "16.0",
                "date": "2024-08-29",
                "questions": [
                    {
                        "id": "Q001",
                        "category": "feature",
                        "priority": "high",
                        "question_ja": "SDK16の新機能について説明してください",
                        "question_en": "Please explain the new features of SDK16",
                        "tags": ["SDK16", "feature", "new"],
                        "status": "pending",
                        "answer_ja": "",
                        "answer_en": ""
                    },
                    {
                        "id": "Q002",
                        "category": "compatibility",
                        "priority": "medium",
                        "question_ja": "既存プロジェクトとの互換性はありますか？",
                        "question_en": "Is there compatibility with existing projects?",
                        "tags": ["SDK16", "compatibility", "migration"],
                        "status": "pending",
                        "answer_ja": "",
                        "answer_en": ""
                    }
                ]
            }
        }
        
        # テスト用JSONファイルを作成
        self.test_json_file = self.test_data_dir / "test_questions.json"
        with open(self.test_json_file, 'w', encoding='utf-8') as f:
            json.dump(self.sample_questions, f, ensure_ascii=False, indent=2)
    
    def tearDown(self):
        """テスト後のクリーンアップ"""
        if self.test_json_file.exists():
            self.test_json_file.unlink()
    
    def test_parse_questions_from_json(self):
        """JSONファイルから質問データを正しく解析できることをテスト"""
        processor = QuestionProcessor()
        questions = processor.parse_questions_from_json(str(self.test_json_file))
        self.assertEqual(len(questions), 2)
        self.assertEqual(questions[0]["id"], "Q001")
    
    def test_validate_question_structure(self):
        """質問データ構造が正しいことをテスト"""
        # 必須フィールドのテスト
        required_fields = ["id", "category", "priority", "question_ja", "question_en", "tags", "status"]
        
        processor = QuestionProcessor()
        for question in self.sample_questions["questionnaire"]["questions"]:
            for field in required_fields:
                self.assertIn(field, question, f"Required field '{field}' missing")
    
    def test_filter_questions_by_priority(self):
        """優先度による質問フィルタリングをテスト"""
        processor = QuestionProcessor()
        questions = processor.parse_questions_from_json(str(self.test_json_file))
        high_priority = processor.filter_by_priority(questions, "high")
        self.assertEqual(len(high_priority), 1)
        self.assertEqual(high_priority[0]["priority"], "high")
    
    def test_filter_questions_by_category(self):
        """カテゴリによる質問フィルタリングをテスト"""
        processor = QuestionProcessor()
        questions = processor.parse_questions_from_json(str(self.test_json_file))
        feature_questions = processor.filter_by_category(questions, "feature")
        self.assertEqual(len(feature_questions), 1)
        self.assertEqual(feature_questions[0]["category"], "feature")
    
    def test_update_question_status(self):
        """質問ステータスの更新をテスト"""
        processor = QuestionProcessor()
        questions = processor.parse_questions_from_json(str(self.test_json_file))
        processor.update_question_status("Q001", "in_progress")
        updated_questions = processor.get_questions()
        q001 = next(q for q in updated_questions if q["id"] == "Q001")
        self.assertEqual(q001["status"], "in_progress")
    
    def test_export_questions_to_markdown(self):
        """質問データをMarkdown形式でエクスポートできることをテスト"""
        processor = QuestionProcessor()
        questions = processor.parse_questions_from_json(str(self.test_json_file))
        markdown_content = processor.export_to_markdown(questions, language="ja")
        self.assertIn("SDK16の新機能について", markdown_content)
        self.assertIn("## Q001", markdown_content)


class TestAnswerGenerator(unittest.TestCase):
    """回答生成システムのテストクラス"""
    
    def test_generate_answer_template(self):
        """回答テンプレートを生成できることをテスト"""
        from answers.answer_generator import AnswerGenerator
        generator = AnswerGenerator()
        template = generator.generate_template("feature")
        self.assertIn("機能概要", template)
        self.assertIn("技術仕様", template)
    
    def test_validate_answer_content(self):
        """回答内容の妥当性をテスト"""
        from answers.answer_generator import AnswerGenerator
        generator = AnswerGenerator()
        answer = "SDK16では新しいVKCコンポーネントが追加されました。"
        is_valid = generator.validate_answer(answer, min_length=10)
        self.assertTrue(is_valid)


if __name__ == "__main__":
    # テストを実行してすべて失敗することを確認
    print("=== TDD Phase 1: Running tests (should all fail initially) ===")
    unittest.main(verbosity=2)