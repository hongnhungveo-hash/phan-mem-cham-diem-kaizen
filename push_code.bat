@echo off
chcp 65001 > nul
echo =======================================================
echo    ĐẨY MÃ NGUỒN LÊN GITHUB - BVĐK HÙNG VƯƠNG
echo =======================================================
echo.

where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [LỖI] Máy tính chưa cài đặt Git!
    echo Vui lòng tải và cài đặt Git tại: https://git-scm.com/download/win
    echo hoặc tải GitHub Desktop tại: https://desktop.github.com/
    pause
    exit /b
)

echo [1/4] Khởi tạo Git repository...
git init

echo [2/4] Đóng gói các file mã nguồn...
git add .

echo [3/4] Tạo bản commit...
git commit -m "Khoi tao Phan mem Cham diem De an Kaizen 16 Nam BVDK Hung Vuong"

echo [4/4] Đẩy code lên GitHub...
git branch -M main
git remote remove origin >nul 2>nul
git remote add origin https://github.com/hongnhungveo-hash/phan-mem-cham-diem-kaizen.git
git push -u origin main

echo.
echo =======================================================
echo   ĐÃ ĐẨY CODE LÊN GITHUB THÀNH CÔNG!
echo =======================================================
pause
