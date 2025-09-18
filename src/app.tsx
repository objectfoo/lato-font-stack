import { ThemeProvider } from "@mui/material/styles";
import { type PageIds } from "./main";
import { CreateWhsTheme } from "./create-custom-theme";
import { SamplesView } from "./views/samples-view";



export function App(props: { page: PageIds }): React.ReactNode {
	let family: "STD"|"ALTERNATE";
	switch (props.page) {
		case "next":
		case "lato-adobe-600-customstack":
		case "lato-2-600-customstack":
		case "lato-adobe-customstack":
			family = "ALTERNATE";
			break;
		case "lato-adobe-600":
		case "lato-adobe":
		default:
			family = "STD";
	}
	const theme = CreateWhsTheme({ fontFamily: family });
	return (
		<ThemeProvider theme={theme}>
			<SamplesView />
		</ThemeProvider>
	);
}
