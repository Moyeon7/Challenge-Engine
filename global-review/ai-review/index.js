/**
 * Global AI Review Aggregator
 * 
 * Aggregates AI feedback from all courses for pathway-level insights
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Aggregates AI feedback from all courses
 */
export function aggregateAIFeedback(coursesDir) {
  const courses = ['01-react-fundamentals', '02-rtk-query', '03-nextjs-app-router'];
  const aggregatedFeedback = [];

  for (const courseId of courses) {
    const aiFeedbackPath = join(coursesDir, courseId, 'results', 'ai-feedback.json');
    
    if (existsSync(aiFeedbackPath)) {
      try {
        const courseFeedback = JSON.parse(readFileSync(aiFeedbackPath, 'utf-8'));
        aggregatedFeedback.push({
          courseId,
          feedback: courseFeedback
        });
      } catch (error) {
        console.warn(`Could not read AI feedback for ${courseId}: ${error.message}`);
      }
    }
  }

  return aggregatedFeedback;
}

/**
 * Generate pathway-level AI insights
 */
export function generatePathwayInsights(aggregatedFeedback) {
  const insights = {
    overallReadability: 0,
    overallMaintainability: 0,
    commonStrengths: [],
    commonImprovements: [],
    courseBreakdown: []
  };

  let totalReadability = 0;
  let totalMaintainability = 0;
  let count = 0;

  const allStrengths = [];
  const allImprovements = [];

  for (const course of aggregatedFeedback) {
    for (const feedback of course.feedback) {
      if (feedback.aiReview) {
        const review = feedback.aiReview;
        if (review.readability) {
          totalReadability += review.readability;
          count++;
        }
        if (review.maintainability) {
          totalMaintainability += review.maintainability;
        }
        if (review.strengths) {
          allStrengths.push(...review.strengths);
        }
        if (review.improvements) {
          allImprovements.push(...review.improvements);
        }
      }
    }

    insights.courseBreakdown.push({
      courseId: course.courseId,
      feedbackCount: course.feedback.length
    });
  }

  insights.overallReadability = count > 0 ? Math.round(totalReadability / count) : 0;
  insights.overallMaintainability = count > 0 ? Math.round(totalMaintainability / count) : 0;

  // Get most common strengths and improvements
  const strengthCounts = {};
  const improvementCounts = {};

  allStrengths.forEach(s => {
    strengthCounts[s] = (strengthCounts[s] || 0) + 1;
  });

  allImprovements.forEach(i => {
    improvementCounts[i] = (improvementCounts[i] || 0) + 1;
  });

  insights.commonStrengths = Object.entries(strengthCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([strength]) => strength);

  insights.commonImprovements = Object.entries(improvementCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([improvement]) => improvement);

  return insights;
}
