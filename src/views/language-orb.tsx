import Typography from "@mui/material/Typography";
import { useSamplesContext } from "./samples-context";

export function LanguageOrb(props: { lang: string; }): React.ReactNode {
	const ctx = useSamplesContext();
	return (
		<Typography
			onClick={() => { ctx.setLang(props.lang as typeof ctx.lang); }}
			variant="body2"
			sx={(theme) => ({
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
	);
};
