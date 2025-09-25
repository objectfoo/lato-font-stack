import { ThemeProvider } from "@mui/material/styles";
import { type TRoute } from "./main";
import { CreateWhsTheme, type CreateThemeOptions } from "./create-custom-theme";
import { SamplesView } from "./samples/samples-view";
import { StackTest } from "./stack-test/stack-test";

export function App(props: { page: TRoute; }): React.ReactNode {
	return (
		<ThemeProvider theme={CreateAppTheme(props.page)}>
			{(props.page === "stack-test" || props.page === "stack-test-v13") ? <StackTest /> : <SamplesView />}
		</ThemeProvider>
	);
}

const CreateAppTheme = (page: TRoute) => {
	let family: CreateThemeOptions["fontFamily"];

	switch (page) {
		case "stack-test":
		case "next":
		case "lato-adobe-600-customstack":
		case "lato-2-600-customstack":
		case "lato-adobe-customstack":
			family = "ALTERNATE";
			break;
		case "stack-test-v13":
		case "lato-adobe-600":
		case "lato-adobe":
		default:
			family = "STD";
	}

	return CreateWhsTheme({ fontFamily: family });
};
