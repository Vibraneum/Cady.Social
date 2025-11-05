@echo off
echo ========================================
echo   Change GitHub Authentication
echo ========================================
echo.

cd /d "%~dp0"

echo This will update your Git configuration for this repository.
echo.

set /p USERNAME="Enter your GitHub username: "
set /p EMAIL="Enter your GitHub email: "

echo.
echo Updating Git configuration...
git config user.name "%USERNAME%"
git config user.email "%EMAIL%"

echo.
echo Configuration updated!
echo.
echo Current settings:
git config user.name
git config user.email

echo.
echo ========================================
echo.
echo IMPORTANT: You may also need to update your GitHub credentials
echo in Windows Credential Manager if you're getting authentication errors.
echo.
echo To do this:
echo 1. Press Windows Key
echo 2. Search for "Credential Manager"
echo 3. Click "Windows Credentials"
echo 4. Find "git:https://github.com"
echo 5. Remove it or update it with correct credentials
echo.
echo ========================================
echo.
pause
