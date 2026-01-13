#!/usr/bin/env python3
"""
LDOC-1167: SDK16 PR質問表対応 - 質問処理システム

質問データの解析、フィルタリング、管理を行うクラス。
TDD Refactor Phase: エラーハンドリングと機能強化。
"""

import json
import logging
from typing import List, Dict, Any, Optional, Union
from pathlib import Path
from datetime import datetime


class QuestionProcessorError(Exception):
    """質問処理システム固有のエラー"""
    pass


class QuestionProcessor:
    """質問データを処理するクラス"""
    
    def __init__(self, log_level: int = logging.INFO):
        """コンストラクタ
        
        Args:
            log_level: ログレベル
        """
        self.questions: List[Dict[str, Any]] = []
        self.metadata: Dict[str, Any] = {}
        
        # ログ設定
        self.logger = logging.getLogger(__name__)
        self.logger.setLevel(log_level)
        if not self.logger.handlers:
            handler = logging.StreamHandler()
            formatter = logging.Formatter(
                '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
            )
            handler.setFormatter(formatter)
            self.logger.addHandler(handler)
    
    def parse_questions_from_json(self, json_file_path: str) -> List[Dict[str, Any]]:
        """JSONファイルから質問データを解析する
        
        Args:
            json_file_path: JSONファイルのパス
            
        Returns:
            質問データのリスト
            
        Raises:
            QuestionProcessorError: ファイル処理または形式エラー
        """
        try:
            json_path = Path(json_file_path)
            if not json_path.exists():
                raise QuestionProcessorError(f"Questions file not found: {json_file_path}")
            
            self.logger.info(f"Loading questions from: {json_file_path}")
            
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # データ構造の検証
            if "questionnaire" not in data:
                raise QuestionProcessorError("Invalid JSON structure: 'questionnaire' key missing")
            
            questionnaire = data["questionnaire"]
            questions = questionnaire.get("questions", [])
            
            if not isinstance(questions, list):
                raise QuestionProcessorError("Invalid JSON structure: 'questions' must be a list")
            
            # メタデータを保存
            self.metadata = {
                "version": questionnaire.get("version", "unknown"),
                "date": questionnaire.get("date", ""),
                "title": questionnaire.get("title", ""),
                "description": questionnaire.get("description", ""),
                "loaded_at": datetime.now().isoformat(),
                "file_path": str(json_path),
                "question_count": len(questions)
            }
            
            # 質問データの基本的な検証
            validated_questions = []
            for i, question in enumerate(questions):
                if not self._validate_question_structure(question):
                    self.logger.warning(f"Question {i} has invalid structure, skipping")
                    continue
                validated_questions.append(question)
            
            self.questions = validated_questions
            self.logger.info(f"Successfully loaded {len(validated_questions)} questions")
            
            return validated_questions
        
        except FileNotFoundError:
            raise QuestionProcessorError(f"Questions file not found: {json_file_path}")
        except json.JSONDecodeError as e:
            raise QuestionProcessorError(f"Invalid JSON format: {e}")
        except Exception as e:
            raise QuestionProcessorError(f"Error processing questions file: {e}")
    
    def _validate_question_structure(self, question: Dict[str, Any]) -> bool:
        """質問データ構造の妥当性を検証する
        
        Args:
            question: 質問データ
            
        Returns:
            妥当性チェック結果
        """
        required_fields = ["id", "category", "priority", "question_ja", "question_en", "status"]
        
        for field in required_fields:
            if field not in question:
                self.logger.warning(f"Required field '{field}' missing in question")
                return False
        
        # 基本的な値の検証
        if not question["id"]:
            self.logger.warning("Question ID is empty")
            return False
            
        if question["priority"] not in ["high", "medium", "low"]:
            self.logger.warning(f"Invalid priority: {question['priority']}")
            return False
        
        return True
    
    def filter_by_priority(self, questions: List[Dict[str, Any]], priority: str) -> List[Dict[str, Any]]:
        """優先度で質問をフィルタリングする
        
        Args:
            questions: 質問データのリスト
            priority: フィルタする優先度
            
        Returns:
            フィルタされた質問のリスト
        """
        if priority not in ["high", "medium", "low"]:
            self.logger.warning(f"Invalid priority filter: {priority}")
            return []
        
        filtered = [q for q in questions if q.get("priority") == priority]
        self.logger.debug(f"Filtered {len(filtered)} questions by priority '{priority}'")
        return filtered
    
    def filter_by_category(self, questions: List[Dict[str, Any]], category: str) -> List[Dict[str, Any]]:
        """カテゴリで質問をフィルタリングする
        
        Args:
            questions: 質問データのリスト
            category: フィルタするカテゴリ
            
        Returns:
            フィルタされた質問のリスト
        """
        if not category:
            self.logger.warning("Empty category filter provided")
            return []
            
        filtered = [q for q in questions if q.get("category") == category]
        self.logger.debug(f"Filtered {len(filtered)} questions by category '{category}'")
        return filtered
    
    def filter_by_status(self, questions: List[Dict[str, Any]], status: str) -> List[Dict[str, Any]]:
        """ステータスで質問をフィルタリングする
        
        Args:
            questions: 質問データのリスト
            status: フィルタするステータス
            
        Returns:
            フィルタされた質問のリスト
        """
        filtered = [q for q in questions if q.get("status") == status]
        self.logger.debug(f"Filtered {len(filtered)} questions by status '{status}'")
        return filtered
    
    def filter_by_tags(self, questions: List[Dict[str, Any]], tags: List[str]) -> List[Dict[str, Any]]:
        """タグで質問をフィルタリングする
        
        Args:
            questions: 質問データのリスト
            tags: フィルタするタグのリスト
            
        Returns:
            フィルタされた質問のリスト
        """
        if not tags:
            return questions
            
        filtered = []
        for question in questions:
            question_tags = question.get("tags", [])
            if any(tag in question_tags for tag in tags):
                filtered.append(question)
        
        self.logger.debug(f"Filtered {len(filtered)} questions by tags {tags}")
        return filtered
    
    def update_question_status(self, question_id: str, new_status: str) -> bool:
        """質問のステータスを更新する
        
        Args:
            question_id: 質問ID
            new_status: 新しいステータス
            
        Returns:
            更新成功フラグ
        """
        valid_statuses = ["pending", "in_progress", "answered", "reviewed", "completed"]
        
        if new_status not in valid_statuses:
            self.logger.warning(f"Invalid status: {new_status}")
            return False
        
        for question in self.questions:
            if question.get("id") == question_id:
                old_status = question.get("status", "unknown")
                question["status"] = new_status
                question["updated_at"] = datetime.now().isoformat()
                self.logger.info(f"Updated question {question_id} status: {old_status} -> {new_status}")
                return True
        
        self.logger.warning(f"Question {question_id} not found")
        return False
    
    def get_questions(self) -> List[Dict[str, Any]]:
        """現在の質問データを取得する
        
        Returns:
            質問データのリスト
        """
        return self.questions.copy()
    
    def get_question_by_id(self, question_id: str) -> Optional[Dict[str, Any]]:
        """IDで特定の質問を取得する
        
        Args:
            question_id: 質問ID
            
        Returns:
            質問データ（見つからない場合はNone）
        """
        for question in self.questions:
            if question.get("id") == question_id:
                return question.copy()
        return None
    
    def get_metadata(self) -> Dict[str, Any]:
        """質問表のメタデータを取得する
        
        Returns:
            メタデータ辞書
        """
        return self.metadata.copy()
    
    def get_statistics(self) -> Dict[str, Any]:
        """質問データの統計情報を取得する
        
        Returns:
            統計情報辞書
        """
        if not self.questions:
            return {"total": 0}
        
        stats = {
            "total": len(self.questions),
            "by_priority": {},
            "by_category": {},
            "by_status": {},
            "completion_rate": 0
        }
        
        # 各カテゴリの集計
        for question in self.questions:
            priority = question.get("priority", "unknown")
            category = question.get("category", "unknown")
            status = question.get("status", "pending")
            
            stats["by_priority"][priority] = stats["by_priority"].get(priority, 0) + 1
            stats["by_category"][category] = stats["by_category"].get(category, 0) + 1
            stats["by_status"][status] = stats["by_status"].get(status, 0) + 1
        
        # 完了率の計算
        completed_count = stats["by_status"].get("completed", 0) + stats["by_status"].get("answered", 0)
        stats["completion_rate"] = (completed_count / len(self.questions)) * 100 if self.questions else 0
        
        return stats
    
    def export_to_markdown(self, questions: List[Dict[str, Any]], language: str = "ja") -> str:
        """質問データをMarkdown形式でエクスポートする
        
        Args:
            questions: 質問データのリスト
            language: 言語 ("ja" または "en")
            
        Returns:
            Markdown形式の文字列
        """
        markdown_content = []
        markdown_content.append(f"# SDK16 PR 質問表\n")
        
        for question in questions:
            question_text_key = f"question_{language}"
            answer_text_key = f"answer_{language}"
            
            markdown_content.append(f"## {question['id']}")
            markdown_content.append(f"**カテゴリ**: {question.get('category', 'N/A')}")
            markdown_content.append(f"**優先度**: {question.get('priority', 'N/A')}")
            markdown_content.append(f"**ステータス**: {question.get('status', 'pending')}")
            markdown_content.append("")
            markdown_content.append("### 質問")
            markdown_content.append(question.get(question_text_key, "質問が見つかりません"))
            markdown_content.append("")
            markdown_content.append("### 回答")
            answer = question.get(answer_text_key, "")
            if answer:
                markdown_content.append(answer)
            else:
                markdown_content.append("*未回答*")
            markdown_content.append("")
            markdown_content.append("---")
            markdown_content.append("")
        
        return "\n".join(markdown_content)