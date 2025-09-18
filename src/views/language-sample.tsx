import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LanguageOrb } from "./language-orb";
import { SampleContainer } from "./sample-container";

const headlines: ("h1" | "h3")[] = ["h1", "h3"];
const variants: ("body1" | "caption")[] = ["body1"];

export function LanguageSample(props: {
	headline: string;
	lines: string[];
	dir?: "ltr" | "rtl";
	lang: string;
}): React.ReactNode {
	return (
		<SampleContainer dir={props.dir ?? "ltr"} lang={props.lang}>
			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<LanguageOrb lang={props.lang} />
			</Box>
			<Stack direction="column" gap={2}>
				<Stack direction="column" gap={2}>
					{headlines.map((v) => <Typography variant={v} key={v}>{props.headline}</Typography>)}
					{variants.map((v): React.ReactNode => (
						props.lines.map((l) => <Typography variant={v} key={`${v}-${l}`}>{l}</Typography>))
					)}
				</Stack>
				<Divider flexItem />
			</Stack>
		</SampleContainer>
	);
}
