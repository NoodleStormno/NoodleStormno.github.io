@echo off
echo ==============================================
echo      NoodleStorm Website Push Script
echo ==============================================

cd /d "%~dp0"

echo.
echo [1/3] Building React website locally...
call npm run build

echo.
echo [2/3] Deploying to GitHub Pages branch...
cd dist
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f https://github.com/NoodleStormno/noodlestormno.github.io.git master:gh-pages
cd ..

echo.
echo [3/3] Saving source code to main branch...
git add .
set /p commitMsg="Enter commit message (Press Enter for default 'Update website'): "
if "%commitMsg%"=="" set commitMsg=Update website
git commit -m "%commitMsg%"
git push origin main

echo.
echo ==============================================
echo Push complete!
echo Press any key to exit...
pause >nul
