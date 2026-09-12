@echo off
setlocal
title Xem Trang Web Kaizen - BVDK Hung Vuong
echo =======================================================
echo    DANG KHOI DONG TRANG WEB KAIZEN - BVDK HUNG VUONG
echo =======================================================
echo.
echo [1/2] Dang mo trinh duyet tai dia chi: http://127.0.0.1:5173/
start http://127.0.0.1:5173/
echo [2/2] Dang chay may chu thu nghiem cuc bo...
call npm run dev -- --host 127.0.0.1 --port 5173
pause
