import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import dotenv from "dotenv";
import path from "path";

// Betöltjük a .env fájlt a root könyvtárból
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const PORT = process.env.PORT || 4000;
console.log(`API szerver fut a következő porton: ${PORT}`);

export default defineConfig({
	plugins: [react(), jsconfigPaths()],
	server: {
		proxy: {
			"/api": {
				target: `http://localhost:${PORT}`,
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
