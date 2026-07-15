$ErrorActionPreference = "Stop"

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "      NoodleStorm Website Push Script" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan

Set-Location $PSScriptRoot

Write-Host "`n[1/3] Adding all changes..." -ForegroundColor Yellow
git add .

Write-Host "`n[2/3] Committing code..." -ForegroundColor Yellow
$commitMsg = Read-Host "Enter commit message (Press Enter for default 'Update website')"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Update website"
}

git commit -m $commitMsg

Write-Host "`n[3/3] Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "`n==============================================" -ForegroundColor Cyan
Write-Host "Push complete! GitHub Actions will now build and deploy your site." -ForegroundColor Green
Read-Host "Press Enter to exit"
