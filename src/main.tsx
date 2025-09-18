import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from "./app";


export type PageIds = "current" | "lato-2-600-customstack" | "lato-adobe" | "lato-adobe-customstack" | "lato-adobe-600" | "lato-adobe-600-customstack";

declare global {
	interface Window {
		page: PageIds;
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App page={window.page} />
	</StrictMode>,
);
