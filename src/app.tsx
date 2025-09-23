import { ThemeProvider } from "@mui/material/styles";
import { type TRoute } from "./main";
import { CreateWhsTheme, type CreateThemeOptions } from "./create-custom-theme";
import { SamplesView } from "./samples/samples-view";



export function App(props: { page: TRoute; }): React.ReactNode {
	return (
		<ThemeProvider theme={CreateAppTheme(props.page)}>
			<GetViewForPage {...{ page: props.page }} />
		</ThemeProvider>
	);
}

function GetViewForPage(props: { page: TRoute; }): React.ReactNode {
	return props.page === "compare"
		? <>Compare</>
		: <SamplesView />
}

const CreateAppTheme = (page: TRoute) => {
	let family: CreateThemeOptions["fontFamily"];

	switch (page) {
		case "compare":
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

	return CreateWhsTheme({ fontFamily: family });
};
