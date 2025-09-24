import Box from "@mui/material/Box";
import { CharacterGrid, commonCharacters } from "./character-grid";

export function Compare(): React.ReactNode {
	return (
		<Box sx={{ p: 2 }}>
			<h1>Compare</h1>
			<p>Common characters in English, French, German, Italian, Portuguese, and Spanish:</p>
			<CharacterGrid chars={commonCharacters} />
		</Box>
	);
}
