#!/bin/bash

# Setup script for Challenge Engine
# Installs dependencies for all courses and review engines

set -e

echo "🚀 Setting up Challenge Engine..."
echo ""

# Course 1: React Fundamentals
echo "📦 Installing dependencies for React Fundamentals..."
cd courses/01-react-fundamentals/project
npm install
cd ../review-engine
npm install
cd ../../..

# Course 2: RTK Query
echo "📦 Installing dependencies for RTK Query..."
cd courses/02-rtk-query/project
npm install
cd ../review-engine
npm install
cd ../../..

# Course 3: Next.js App Router
echo "📦 Installing dependencies for Next.js App Router..."
cd courses/03-nextjs-app-router/project
npm install
cd ../review-engine
npm install
cd ../../..

# Install Playwright browsers
echo "🎭 Installing Playwright browsers..."
cd courses/01-react-fundamentals/project
npx playwright install chromium
cd ../../02-rtk-query/project
npx playwright install chromium
cd ../../03-nextjs-app-router/project
npx playwright install chromium
cd ../../..

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Test a course: cd courses/01-react-fundamentals/project && npm run dev"
echo "2. Run review: npm run review"
echo "3. Run global review: node global-review/run-all-reviews.js"
