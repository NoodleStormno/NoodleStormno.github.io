@echo off
echo ==============================================
echo      NoodleStorm Website Push Script
echo ==============================================

cd /d "%~dp0"

echo [1/3] Adding all changes...
git add .

echo [2/3] Committing code...
set /p commitMsg="Enter commit message (Press Enter for default 'Update website'): "
if "%commitMsg%"=="" set commitMsg=Update website

git commit -m "%commitMsg%"

echo [3/3] Pushing to GitHub...
git push origin main

echo ==============================================
echo Push complete! GitHub Actions will now build and deploy your site.
echo Press any key to exit...
pause >nul
