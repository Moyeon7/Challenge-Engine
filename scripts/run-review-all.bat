@echo off
REM Run review for all courses (Windows)

echo 🔍 Running reviews for all courses...
echo.

REM Review Course 1
echo 📚 Reviewing React Fundamentals...
cd courses\01-react-fundamentals\project
call npm run review || echo ⚠️  Review failed (may need dependencies installed)

REM Review Course 2
echo.
echo 📚 Reviewing RTK Query...
cd ..\..\02-rtk-query\project
call npm run review || echo ⚠️  Review failed (may need dependencies installed)

REM Review Course 3
echo.
echo 📚 Reviewing Next.js App Router...
cd ..\..\03-nextjs-app-router\project
call npm run review || echo ⚠️  Review failed (may need dependencies installed)

REM Global review
echo.
echo 🌐 Running global review...
cd ..\..\..
call node global-review\run-all-reviews.js || echo ⚠️  Global review failed

echo.
echo ✅ Review process complete!
