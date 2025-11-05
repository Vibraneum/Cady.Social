@echo off
echo ========================================
echo   Personhood - Deploying Website
echo ========================================
echo.

cd /d "%~dp0"

echo Preparing files...
if exist styles-additions.css (
    echo - Merging CSS files...
    type styles-additions.css >> styles.css
    del styles-additions.css
) else (
    echo - CSS already merged
)

if exist CADY_logo_V1.webp (
    echo - Copying Cady logo...
    copy CADY_logo_V1.webp assets\cady-logo.webp >nul 2>&1
) else (
    echo - Logo already in place
)
echo.

echo Step 1: Initializing Git repository...
git init
if errorlevel 1 (
    echo Git init failed. Make sure Git is installed.
    pause
    exit /b 1
)

git config user.email "vedanthnath@gmail.com" >nul 2>&1
git config user.name "Vibraneum" >nul 2>&1

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating commit...
git commit -m "Personhood - Redesigned multi-page website with LocalHost-inspired aesthetic"

echo.
echo Step 4: Setting branch to main...
git branch -M main

echo.
echo Step 5: Adding remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/Vibraneum/Cady.Social.git

echo.
echo Step 6: Pushing to GitHub...
git push -u origin main --force

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your website will be live at:
echo https://vibraneum.github.io/Cady.Social/
echo or
echo https://cady.social/ (if custom domain configured)
echo.
echo GitHub Pages will take 1-2 minutes to deploy.
echo.
pause
