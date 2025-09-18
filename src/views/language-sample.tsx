import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSamplesContext } from "../samples-view";
import { BasicButton } from "./basic-button";

const headlines: ("h1" | "h3")[] = ["h1", "h3"];
const variants: ("body1" | "caption")[] = ["body1"];

export function LanguageSample(props: {
	headline: string;
	lines: string[];
	dir?: "ltr" | "rtl";
	lang: string;
}): React.ReactNode {
	const ctx = useSamplesContext();

	return (
		<Box lang={props.lang} dir={props.dir}>
			<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
				<Typography
					onClick={() => { ctx.setLang(props.lang as typeof ctx.lang); }}
					variant="body2"
					sx={(theme) =>({
						minWidth: 32,
						height: 44,
						px: 1,
						py: .25,
						color: "#000",
						fontWeight: 900,
						display: "flex",
						letterSpacing: "1px",
						borderRadius: "30px",
						alignItems: "center",
						justifyContent: "center",
						textTransform: "uppercase",
						backgroundColor: "#bbb",
						"&:hover": {
							cursor: "pointer",
							backgroundColor: "#333",
							color: "#fff",
							boxShadow: theme.shadows[2],
						},
					})}>{props.lang}</Typography>
			</Box>
			<Stack direction="column" gap={2}>
				<Stack direction="column" gap={2}>
					{headlines.map((v) => <Typography variant={v} key={v}>{props.headline}</Typography>)}
					{variants.map((v): React.ReactNode => (
						props.lines.map((l) => <Typography variant={v} key={`${v}-${l}`}>{l}</Typography>))
					)}
				</Stack>
				<Divider flexItem />
				<BasicButton dir={props.dir ?? "ltr"} lang={props.lang} />
				<Divider flexItem />
			</Stack>
		</Box>
	);
}
