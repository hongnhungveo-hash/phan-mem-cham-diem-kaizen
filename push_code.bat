@echo off
setlocal
title Day Ma Nguon Len GitHub - BVDK Hung Vuong

echo =======================================================
echo    DAY MA NGUON LEN GITHUB - BVDK HUNG VUONG
echo =======================================================
echo.

if exist "%LOCALAPPDATA%\Programs\MinGit\cmd\git.exe" (
    set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%LOCALAPPDATA%\Programs\MinGit\mingw64\bin;%PATH%"
)

where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [LOI] May tinh chua cai dat Git!
    echo Vui long tai va cai dat Git tai: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [1/3] Kiem tra va ghi nhan code moi...
git config user.name "hongnhungveo-hash"
git config user.email "hongnhung@hungvuonghospital.com"
git branch -M main

git remote get-url origin >nul 2>nul
if %ERRORLEVEL% neq 0 (
    git remote add origin https://github.com/hongnhungveo-hash/phan-mem-cham-diem-kaizen.git
)

git add -A
git commit -m "Fix: Cap nhat logo va dong bo docs cho GitHub Pages" 2>nul

echo.
echo [2/3] Dang day code len GitHub...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo =======================================================
    echo   DA DAY CODE LEN GITHUB THANH CONG!
    echo =======================================================
) else (
    echo.
    echo =======================================================
    echo   CO LOI TRONG QUA TRINH DAY CODE.
    echo   Vui long kiem tra quyen truy cap GitHub hoac Token!
    echo =======================================================
)

pause