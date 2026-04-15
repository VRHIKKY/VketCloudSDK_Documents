#!/usr/bin/env python3
"""
Integrated QC/QA tool specifically for VKC Item Field documentation.
Combines link checking, multilingual synchronization, and quality assessment.
"""

import os
import json
from datetime import datetime
from typing import Dict, List, Any, Optional
from dataclasses import dataclass, field, asdict

import sys
import os
sys.path.append(os.path.dirname(__file__))

from link_checker import LinkChecker, LinkCheckResult
from multilang_sync import MultiLangSyncChecker, SyncCheckResult


@dataclass
class QualityMetrics:
    """Quality metrics for documentation assessment."""
    technical_accuracy_score: float = 0.0
    structural_consistency_score: float = 0.0
    multilingual_sync_score: float = 0.0
    usability_score: float = 0.0
    maintainability_score: float = 0.0
    overall_score: float = 0.0


@dataclass
class VKCItemFieldQAResult:
    """Comprehensive QA results for VKC Item Field documentation."""
    timestamp: str = field(default_factory=lambda: datetime.now().isoformat())
    files_analyzed: List[str] = field(default_factory=list)
    
    # Link analysis results
    ja_link_result: Optional[LinkCheckResult] = None
    en_link_result: Optional[LinkCheckResult] = None
    
    # Synchronization results
    sync_result: Optional[SyncCheckResult] = None
    
    # Quality metrics
    quality_metrics: QualityMetrics = field(default_factory=QualityMetrics)
    
    # Issues categorized by severity
    critical_issues: List[Dict[str, Any]] = field(default_factory=list)
    major_issues: List[Dict[str, Any]] = field(default_factory=list)
    minor_issues: List[Dict[str, Any]] = field(default_factory=list)
    
    # Recommendations
    recommendations: List[str] = field(default_factory=list)
    
    def add_critical_issue(self, category: str, description: str, details: str = "") -> None:
        """Add a critical issue to the results."""
        self.critical_issues.append({
            'category': category,
            'description': description,
            'details': details,
            'severity': 'critical'
        })
    
    def add_major_issue(self, category: str, description: str, details: str = "") -> None:
        """Add a major issue to the results."""
        self.major_issues.append({
            'category': category,
            'description': description,
            'details': details,
            'severity': 'major'
        })
    
    def add_minor_issue(self, category: str, description: str, details: str = "") -> None:
        """Add a minor issue to the results."""
        self.minor_issues.append({
            'category': category,
            'description': description,
            'details': details,
            'severity': 'minor'
        })
    
    def add_recommendation(self, recommendation: str) -> None:
        """Add a recommendation to improve documentation quality."""
        self.recommendations.append(recommendation)
    
    def calculate_overall_score(self) -> float:
        """Calculate overall quality score based on all metrics."""
        scores = [
            self.quality_metrics.technical_accuracy_score,
            self.quality_metrics.structural_consistency_score,
            self.quality_metrics.multilingual_sync_score,
            self.quality_metrics.usability_score,
            self.quality_metrics.maintainability_score
        ]
        
        # Weight the scores (some are more important than others)
        weights = [0.3, 0.2, 0.2, 0.15, 0.15]  # Technical accuracy is most important
        
        weighted_score = sum(score * weight for score, weight in zip(scores, weights))
        self.quality_metrics.overall_score = round(weighted_score, 2)
        return self.quality_metrics.overall_score


class VKCItemFieldQARunner:
    """Main QA runner for VKC Item Field documentation."""
    
    def __init__(self, base_path: str = "docs/"):
        """Initialize the QA runner."""
        self.base_path = base_path
        self.link_checker = LinkChecker(base_path)
        self.sync_checker = MultiLangSyncChecker()
        
        # File paths for VKC Item Field documentation
        self.ja_file = os.path.join(base_path, "VKCComponents/VKCItemField.ja.md")
        self.en_file = os.path.join(base_path, "VKCComponents/VKCItemField.en.md")
        self.image_dir = os.path.join(base_path, "VKCComponents/img/")
    
    def run_comprehensive_qa(self) -> VKCItemFieldQAResult:
        """Run comprehensive QA analysis on VKC Item Field documentation."""
        result = VKCItemFieldQAResult()
        
        # Check if files exist
        if not os.path.exists(self.ja_file):
            result.add_critical_issue("Missing File", f"Japanese documentation not found: {self.ja_file}")
            return result
        
        if not os.path.exists(self.en_file):
            result.add_critical_issue("Missing File", f"English documentation not found: {self.en_file}")
            return result
        
        result.files_analyzed = [self.ja_file, self.en_file]
        
        # 1. Link Analysis
        print("Running link analysis...")
        result.ja_link_result = self.link_checker.check_file_links(self.ja_file)
        result.en_link_result = self.link_checker.check_file_links(self.en_file)
        
        # 2. Multilingual Synchronization Analysis
        print("Running multilingual synchronization analysis...")
        result.sync_result = self.sync_checker.compare_documents(self.ja_file, self.en_file)
        
        # 3. Quality Assessment
        print("Calculating quality metrics...")
        self._assess_technical_accuracy(result)
        self._assess_structural_consistency(result)
        self._assess_multilingual_sync(result)
        self._assess_usability(result)
        self._assess_maintainability(result)
        
        # 4. Generate Issues and Recommendations
        self._categorize_issues(result)
        self._generate_recommendations(result)
        
        # 5. Calculate Overall Score
        result.calculate_overall_score()
        
        return result
    
    def _assess_technical_accuracy(self, result: VKCItemFieldQAResult) -> None:
        """Assess technical accuracy based on link validation."""
        ja_stats = result.ja_link_result.get_summary_stats() if result.ja_link_result else {'success_rate': 0}
        en_stats = result.en_link_result.get_summary_stats() if result.en_link_result else {'success_rate': 0}
        
        # Average success rate of both versions
        avg_success_rate = (ja_stats['success_rate'] + en_stats['success_rate']) / 2
        result.quality_metrics.technical_accuracy_score = avg_success_rate
    
    def _assess_structural_consistency(self, result: VKCItemFieldQAResult) -> None:
        """Assess structural consistency within each document."""
        # For now, base this on image availability and table structure
        score = 100.0
        
        # Check if images exist
        expected_images = ["VKCItemField1.jpg", "VKCItemField2.jpg", "VKCItemField3.jpg"]
        for image in expected_images:
            image_path = os.path.join(self.image_dir, image)
            if not os.path.exists(image_path):
                score -= 15  # Deduct points for missing images
                result.add_major_issue("Missing Image", f"Expected image not found: {image}")
        
        result.quality_metrics.structural_consistency_score = max(0, score)
    
    def _assess_multilingual_sync(self, result: VKCItemFieldQAResult) -> None:
        """Assess multilingual synchronization quality."""
        if not result.sync_result:
            result.quality_metrics.multilingual_sync_score = 0
            return
        
        # Calculate score based on sync issues
        total_issues = (
            len(result.sync_result.structural_issues) +
            len(result.sync_result.content_mismatches) +
            len(result.sync_result.missing_sections)
        )
        
        # Deduct points for each type of issue
        score = 100.0
        score -= len(result.sync_result.structural_issues) * 10  # Structural issues are serious
        score -= len(result.sync_result.content_mismatches) * 8   # Content mismatches
        score -= len(result.sync_result.missing_sections) * 5    # Missing sections
        
        result.quality_metrics.multilingual_sync_score = max(0, score)
    
    def _assess_usability(self, result: VKCItemFieldQAResult) -> None:
        """Assess documentation usability for end users."""
        # Basic heuristic assessment
        score = 75.0  # Start with a reasonable baseline
        
        # Check for presence of important sections
        if result.ja_link_result and result.en_link_result:
            # If we have good link coverage, it suggests comprehensive content
            avg_links = (len(result.ja_link_result.internal_links) + len(result.en_link_result.internal_links)) / 2
            if avg_links > 30:  # Rich cross-referencing
                score += 15
            elif avg_links > 20:
                score += 10
            elif avg_links < 10:
                score -= 10
        
        # Check for image support
        if result.ja_link_result and len(result.ja_link_result.image_links) >= 3:
            score += 10  # Good visual support
        
        result.quality_metrics.usability_score = min(100, score)
    
    def _assess_maintainability(self, result: VKCItemFieldQAResult) -> None:
        """Assess how maintainable the documentation is."""
        score = 80.0  # Start with good baseline
        
        # Penalty for broken links (maintenance burden)
        if result.ja_link_result:
            broken_link_ratio = len(result.ja_link_result.invalid_links) / max(1, result.ja_link_result.get_summary_stats()['total_links'])
            score -= broken_link_ratio * 50  # Heavy penalty for broken links
        
        # Penalty for sync issues (maintenance burden)
        if result.sync_result:
            sync_issues = len(result.sync_result.structural_issues) + len(result.sync_result.content_mismatches)
            score -= sync_issues * 3
        
        result.quality_metrics.maintainability_score = max(0, score)
    
    def _categorize_issues(self, result: VKCItemFieldQAResult) -> None:
        """Categorize identified issues by severity."""
        # Link issues
        if result.ja_link_result and result.ja_link_result.invalid_links:
            for invalid_link in result.ja_link_result.invalid_links:
                if "hs_class_item.md" in invalid_link['link']:
                    result.add_critical_issue(
                        "Broken HeliScript Reference",
                        f"HeliScript API reference broken: {invalid_link['link']}",
                        invalid_link['reason']
                    )
                elif invalid_link['link'].endswith('.md'):
                    result.add_major_issue(
                        "Broken Internal Link",
                        f"Internal documentation link broken: {invalid_link['link']}",
                        invalid_link['reason']
                    )
                else:
                    result.add_minor_issue(
                        "Broken Link",
                        f"Link issue: {invalid_link['link']}",
                        invalid_link['reason']
                    )
        
        # Sync issues
        if result.sync_result:
            for issue in result.sync_result.structural_issues:
                result.add_major_issue(
                    "Structural Mismatch",
                    f"Structure differs between languages: {issue['type']}",
                    f"Section: {issue['section']}"
                )
            
            for mismatch in result.sync_result.content_mismatches:
                result.add_major_issue(
                    "Content Mismatch",
                    f"Content inconsistency: {mismatch['type']}",
                    mismatch['details']
                )
            
            for missing in result.sync_result.missing_sections:
                result.add_minor_issue(
                    "Missing Section",
                    f"Section missing in {missing['missing_in']} version",
                    f"Section: {missing['section']}"
                )
    
    def _generate_recommendations(self, result: VKCItemFieldQAResult) -> None:
        """Generate recommendations for improving documentation quality."""
        # Technical accuracy recommendations
        if result.quality_metrics.technical_accuracy_score < 80:
            result.add_recommendation("Fix broken internal links and HeliScript API references")
            result.add_recommendation("Verify all cross-references point to existing documentation")
        
        # Structural consistency recommendations
        if result.quality_metrics.structural_consistency_score < 90:
            result.add_recommendation("Ensure all referenced images are available in the img/ directory")
            result.add_recommendation("Verify table structures are consistent and complete")
        
        # Multilingual sync recommendations
        if result.quality_metrics.multilingual_sync_score < 85:
            result.add_recommendation("Synchronize header structures between Japanese and English versions")
            result.add_recommendation("Ensure parameter tables have matching structure across languages")
        
        # Usability recommendations
        if result.quality_metrics.usability_score < 80:
            result.add_recommendation("Add more practical examples and use cases")
            result.add_recommendation("Improve visual aids and diagrams")
        
        # Maintainability recommendations
        if result.quality_metrics.maintainability_score < 80:
            result.add_recommendation("Implement automated link checking in CI/CD pipeline")
            result.add_recommendation("Create maintenance checklist for documentation updates")


def generate_qa_report(result: VKCItemFieldQAResult) -> str:
    """Generate a comprehensive QA report."""
    report_lines = [
        "VKC Item Field Documentation QC/QA Report",
        "=" * 45,
        "",
        f"Generated: {result.timestamp}",
        f"Files Analyzed: {', '.join(result.files_analyzed)}",
        "",
        "QUALITY METRICS",
        "-" * 15,
        f"Technical Accuracy:      {result.quality_metrics.technical_accuracy_score:.1f}/100",
        f"Structural Consistency:  {result.quality_metrics.structural_consistency_score:.1f}/100",
        f"Multilingual Sync:       {result.quality_metrics.multilingual_sync_score:.1f}/100",
        f"Usability:              {result.quality_metrics.usability_score:.1f}/100",
        f"Maintainability:        {result.quality_metrics.maintainability_score:.1f}/100",
        "",
        f"OVERALL SCORE: {result.quality_metrics.overall_score:.1f}/100",
        "",
    ]
    
    # Issues summary
    total_issues = len(result.critical_issues) + len(result.major_issues) + len(result.minor_issues)
    report_lines.extend([
        "ISSUES SUMMARY",
        "-" * 14,
        f"Total Issues Found: {total_issues}",
        f"  Critical: {len(result.critical_issues)}",
        f"  Major:    {len(result.major_issues)}",
        f"  Minor:    {len(result.minor_issues)}",
        "",
    ])
    
    # Critical issues
    if result.critical_issues:
        report_lines.extend(["CRITICAL ISSUES", "-" * 15])
        for issue in result.critical_issues:
            report_lines.extend([
                f"• {issue['description']}",
                f"  Category: {issue['category']}",
                f"  Details: {issue['details']}" if issue['details'] else "",
                ""
            ])
    
    # Major issues
    if result.major_issues:
        report_lines.extend(["MAJOR ISSUES", "-" * 12])
        for issue in result.major_issues[:5]:  # Limit to first 5 for readability
            report_lines.extend([
                f"• {issue['description']}",
                f"  Category: {issue['category']}",
                ""
            ])
        if len(result.major_issues) > 5:
            report_lines.append(f"... and {len(result.major_issues) - 5} more major issues")
            report_lines.append("")
    
    # Recommendations
    if result.recommendations:
        report_lines.extend(["RECOMMENDATIONS", "-" * 15])
        for i, recommendation in enumerate(result.recommendations, 1):
            report_lines.append(f"{i}. {recommendation}")
        report_lines.append("")
    
    return "\n".join(report_lines)


if __name__ == "__main__":
    """Command-line interface for VKC Item Field QA."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Run QC/QA analysis on VKC Item Field documentation")
    parser.add_argument("--output", "-o", help="Output report to file")
    parser.add_argument("--json", action="store_true", help="Output results as JSON")
    parser.add_argument("--base-path", default="docs/", help="Base path for documentation")
    
    args = parser.parse_args()
    
    # Run QA analysis
    qa_runner = VKCItemFieldQARunner(args.base_path)
    result = qa_runner.run_comprehensive_qa()
    
    # Generate output
    if args.json:
        output = json.dumps(asdict(result), indent=2, default=str)
    else:
        output = generate_qa_report(result)
    
    # Write to file or stdout
    if args.output:
        with open(args.output, 'w', encoding='utf-8') as f:
            f.write(output)
        print(f"Report written to {args.output}")
    else:
        print(output)