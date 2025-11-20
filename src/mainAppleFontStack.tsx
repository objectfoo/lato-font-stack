import { Apple } from "./apple-font-stack/Apple";
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

const root = createRoot(document.getElementById('root')!);

root.render(
	<StrictMode>
		<Apple />
	</StrictMode>,
);

