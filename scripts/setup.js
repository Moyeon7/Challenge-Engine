#!/usr/bin/env node
/**
 * Cross-platform setup: install dependencies for all courses and review engines,
 * and Playwright browsers. Use: npm run setup
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const courses = [
  '01-react-fundamentals',
  '02-rtk-query',
  '03-nextjs-app-router',
];

console.log('🚀 Setting up Challenge Engine...\n');

for (const courseId of courses) {
  const projectDir = join(ROOT, 'courses', courseId, 'project');
  const reviewDir = join(ROOT, 'courses', courseId, 'review-engine');
  console.log(`📦 ${courseId}: project`);
  if (existsSync(projectDir)) {
    execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
  }
  console.log(`📦 ${courseId}: review-engine`);
  if (existsSync(reviewDir)) {
    execSync('npm install', { cwd: reviewDir, stdio: 'inherit' });
  }
}

console.log('\n🎭 Installing Playwright browsers (chromium)...');
for (const courseId of courses) {
  const projectDir = join(ROOT, 'courses', courseId, 'project');
  if (existsSync(join(projectDir, 'package.json'))) {
    execSync('npx playwright install chromium', { cwd: projectDir, stdio: 'inherit' });
  }
}

console.log('\n✅ Setup complete!');
console.log('\nNext: cd courses/01-react-fundamentals/project && npm run dev');
console.log('Run review: npm run review (from course project) or npm run review:challenge -- --course=01-react-fundamentals --challenge=01-user-profile (from root)');
