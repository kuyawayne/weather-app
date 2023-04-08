import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const config = {
  plugins: [react()],
  base: "/weather-app"
};

export default defineConfig(config);