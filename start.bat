@echo off
title SmileCare Pro Dev Server
echo ===================================================
echo   SmileCare Pro - Premium Dental Website Launcher
echo ===================================================
echo.
echo Starting Next.js development server...
start /b npm run dev
echo.
echo Waiting 4 seconds for the server to spin up...
timeout /t 4 /nobreak > nul
echo.
echo Launching browser on port 3000...
start "" "http://localhost:3000"
echo.
echo Server is running! Press Ctrl+C in this window to stop.
echo.
pause
