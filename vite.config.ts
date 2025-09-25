import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: "/lato-font-stack",
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				"stack-test-v13": "pages/stack-test-v13.html",
				"stack-test": "pages/stack-test.html",
				"current": "pages/current.html",
				"lato-2-600-customstack": "pages/lato-2-600-customstack.html",
				"lato-adobe-600-customstack": "pages/lato-adobe-600-customstack.html",
				"lato-adobe-600": "pages/lato-adobe-600.html",
				"lato-adobe-customstack": "pages/lato-adobe-customstack.html",
				"lato-adobe": "pages/lato-adobe.html",
				"next": "pages/next.html",
			}
		}
	}
});
