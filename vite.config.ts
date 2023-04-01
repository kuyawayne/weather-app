import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const config = {
  plugins: [react()],
};

export default defineConfig(config);