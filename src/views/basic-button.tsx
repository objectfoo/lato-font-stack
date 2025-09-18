import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { type SampleContainerProps } from "./sample-container";
import { LanguageOrb } from "./language-orb";

export function BasicButton(props: Omit<SampleContainerProps, "children">): React.ReactNode {
	return (
		<Stack lang={props.lang} dir={props.dir} direction="column" spacing={2} useFlexGap>
			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<LanguageOrb lang={props.lang} />
			</Box>

			<Stack spacing={2} direction="row" useFlexGap>
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
			<Divider flexItem />
		</Stack>
	);
}
