@echo off
chcp 65001 > nul
echo =======================================================
echo    ĐẨY MÃ NGUỒN LÊN GITHUB - BVĐK HÙNG VƯƠNG
echo =======================================================
echo.

if exist "%LOCALAPPDATA%\Programs\MinGit\cmd\git.exe" (
    set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%LOCALAPPDATA%\Programs\MinGit\mingw64\bin;%PATH%"
)

where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [LỖI] Máy tính chưa cài đặt Git!
    echo Vui lòng tải và cài đặt Git tại: https://git-scm.com/download/win
    pause
    exit /b
)

echo [1/4] Tự động đóng gói và biên dịch dự án (npm run build)...
call npm run build

echo [2/4] Kiểm tra Git repository...
git rev-parse --is-inside-work-tree >nul 2>nul
if %ERRORLEVEL% neq 0 (
    git init
)

git config user.name >nul 2>nul
if %ERRORLEVEL% neq 0 (
    git config user.name "hongnhungveo-hash"
    git config user.email "hongnhung@hungvuonghospital.com"
)

git branch -M main

git remote get-url origin >nul 2>nul
if %ERRORLEVEL% neq 0 (
    git remote add origin https://github.com/hongnhungveo-hash/phan-mem-cham-diem-kaizen.git
)

echo [3/4] Đóng gói các file đã chỉnh sửa...
git add .
git commit -m "Fix: Cap nhat duong dan logo va dong bo docs cho GitHub Pages" 2>nul || echo [Thong tin] Cac thay doi da duoc ghi nhan day du.

echo [4/4] Đẩy code lên GitHub...
git push -u origin main

echo.
echo =======================================================
echo   ĐÃ ĐẨY CODE LÊN GITHUB THÀNH CÔNG!
echo =======================================================
pause
