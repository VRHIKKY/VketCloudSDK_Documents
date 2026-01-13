#!/usr/bin/env python3
"""
LDOC-1167: SDK16 PR質問表対応 - 質問処理システム

質問データの解析、フィルタリング、管理を行うクラス。
TDD Green Phase: 最小実装でテストを通す。
"""

import json
from typing import List, Dict, Any, Optional
from pathlib import Path


class QuestionProcessor:
    """質問データを処理するクラス"""
    
    def __init__(self):
        """コンストラクタ"""
        self.questions: List[Dict[str, Any]] = []
    
    def parse_questions_from_json(self, json_file_path: str) -> List[Dict[str, Any]]:
        """JSONファイルから質問データを解析する
        
        Args:
            json_file_path: JSONファイルのパス
            
        Returns:
            質問データのリスト
        """
        try:
            with open(json_file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            questions = data.get("questionnaire", {}).get("questions", [])
            self.questions = questions
            return questions
        
        except FileNotFoundError:
            raise FileNotFoundError(f"Questions file not found: {json_file_path}")
        except json.JSONDecodeError as e:
            raise ValueError(f"Invalid JSON format: {e}")
    
    def filter_by_priority(self, questions: List[Dict[str, Any]], priority: str) -> List[Dict[str, Any]]:
        """優先度で質問をフィルタリングする
        
        Args:
            questions: 質問データのリスト
            priority: フィルタする優先度
            
        Returns:
            フィルタされた質問のリスト
        """
        return [q for q in questions if q.get("priority") == priority]
    
    def filter_by_category(self, questions: List[Dict[str, Any]], category: str) -> List[Dict[str, Any]]:
        """カテゴリで質問をフィルタリングする
        
        Args:
            questions: 質問データのリスト
            category: フィルタするカテゴリ
            
        Returns:
            フィルタされた質問のリスト
        """
        return [q for q in questions if q.get("category") == category]
    
    def update_question_status(self, question_id: str, new_status: str) -> None:
        """質問のステータスを更新する
        
        Args:
            question_id: 質問ID
            new_status: 新しいステータス
        """
        for question in self.questions:
            if question.get("id") == question_id:
                question["status"] = new_status
                break
    
    def get_questions(self) -> List[Dict[str, Any]]:
        """現在の質問データを取得する
        
        Returns:
            質問データのリスト
        """
        return self.questions
    
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