import { App } from "./app";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'


const routeKeys = [
	"compare",
	"current",
	"lato-2-600-customstack",
	"lato-adobe-600-customstack",
	"lato-adobe-600",
	"lato-adobe-customstack",
	"lato-adobe",
	"next",
] as const;


export type TRoute = typeof routeKeys[number];

declare global {
	interface Window {
		page: TRoute;
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App page={window.page} />
	</StrictMode>,
);
