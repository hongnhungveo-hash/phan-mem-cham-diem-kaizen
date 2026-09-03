import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Đường dẫn tương đối giúp web chạy chuẩn trên GitHub Pages hoặc bất kỳ hosting nào
})
