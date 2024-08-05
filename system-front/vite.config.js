import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:"0.0.0.0",
    port:9090,
    open:false,
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src"),
    }
  }
})
