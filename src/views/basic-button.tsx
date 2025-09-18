import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SampleContainer, type SampleContainerProps } from "./sample-container";

export function BasicButton(props: SampleContainerProps): React.ReactNode {
	return (
		<SampleContainer dir={props.dir} lang={props.lang}>
			<Stack spacing={2} direction="row">
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
		</SampleContainer>
	);
}
