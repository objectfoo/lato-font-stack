import { App } from "./app";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

export type TRoute = "current" | "lato-2-600-customstack" | "lato-adobe-600-customstack" |
	"lato-adobe-600" | "lato-adobe-customstack" | "lato-adobe" | "next" | "stack-test" |
	"stack-test-v13";

declare global {
	interface Window {
		page: TRoute;
	}
}
const root = createRoot(document.getElementById('root')!);

root.render(
	<StrictMode>
		<App page={window.page} />
	</StrictMode>,
);
