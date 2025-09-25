import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";
import * as SampleStrings from "../sample-language-strings";
import { LanguageSample } from "./language-sample"
import { BasicButton } from "./basic-button";
import { ALL_LANGS, Locales, SamplesContext, SubViews, type TLanguageOption, type TView } from "./samples-context";

export type TLanguageSampleStrings = {
	headline: string;
	lines: string[];
};


export function SamplesView(): React.ReactNode {
	const [lang, setLang] = useState<TLanguageOption>(ALL_LANGS);
	const [subView, setSubView] = useState<TView>("strings");
	const filtered = useMemo(() => Locales.filter((locale) => (lang === ALL_LANGS || lang === locale)), [lang]);
	return (
		<SamplesContext.Provider value={{ lang, setLang, subView, setSubView: setSubView }}>
			<Container maxWidth="md" fixed>
				<SamplesBar {...{ lang, setLang, subView: subView, setSubView: setSubView }} />
				<Stack spacing={2} direction="column">
					{filtered.map((locale) => {
						// strip locale hyphen for lookup
						const localeId = locale.replace("-", "") as keyof typeof SampleStrings
						const strings = (SampleStrings as Record<string, TLanguageSampleStrings>)[localeId];
						if (!strings) {
							throw new Error(`No strings for locale ${locale}`);
						};
						const dir = ["ar", "he"].includes(locale) ? "rtl" : "ltr";
						return subView === "buttons"
							? <BasicButton key={locale} lang={locale} dir={dir} />
							: <LanguageSample key={locale} headline={strings.headline} lines={strings.lines} lang={locale} dir={dir} />
					})}
				</Stack>
			</Container>
		</SamplesContext.Provider>
	);
}

function SamplesBar(props: {
	lang: TLanguageOption;
	setLang: React.Dispatch<React.SetStateAction<TLanguageOption & typeof ALL_LANGS>>;
	subView: TView;
	setSubView: React.Dispatch<React.SetStateAction<TView>>;
}): React.ReactNode {
	return (
		<AppBar position="static" elevation={0} sx={{ mb: 4 }} color="default">
			<Toolbar variant="dense" sx={{ gap: 2 }}>
				<IconButton href="/lato-font-stack/" edge="start">{HomeIcon}</IconButton>
				<Typography sx={{ flexGrow: 1, fontWeight: 300, fontSize: 16 }}>{GetTitle()}</Typography>
				<TextField
					sx={{ minWidth: 90, fontSize: 14 }}
					size="small"
					margin="dense"
					id="select-sub-view"
					select
					value={props.subView}
					onChange={(x) => { props.setSubView(x.target.value as TView) }}
					variant="standard"
				>
					{SubViews.map((id) => <MenuItem sx={{ fontSize: 14 }} key={id} value={id}>{id}</MenuItem>)}
				</TextField>
				<TextField
					sx={{ minWidth: 90, fontSize: 14 }}
					size="small"
					margin="dense"
					id="select-language"
					select
					value={props.lang}
					onChange={(x) => { props.setLang(x.target.value as TLanguageOption); }}
					variant="standard"
				>
					<MenuItem sx={{ fontSize: 14 }} key="all" value="all">ALL</MenuItem>
					{Locales.map((id) => <MenuItem sx={{ fontSize: 14 }} key={id} value={id}>{id}</MenuItem>)}
				</TextField>
			</Toolbar>
		</AppBar>
	);
}

const HomeIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.077q0-.343.233-.575q.232-.233.575-.233h3q.343 0 .576.233q.232.232.232.575V19H18v-8.692q0-.154-.067-.28t-.183-.22L12.366 5.75q-.154-.134-.366-.134t-.365.134L6.25 9.808q-.115.096-.183.22t-.067.28zm-1 0v-8.692q0-.384.172-.727t.474-.565l5.385-4.078q.423-.323.966-.323t.972.323l5.385 4.077q.303.222.474.566q.172.343.172.727V19q0 .402-.299.701T18 20h-3.884q-.344 0-.576-.232q-.232-.233-.232-.576v-5.076h-2.616v5.076q0 .344-.232.576T9.885 20H6q-.402 0-.701-.299T5 19m7-6.711" /></svg>
);

function GetTitle(): string {
	const page = window.page;
	switch (page) {
		case "lato-2-600-customstack":
			return "Lato 2.0 + 600 + custom font stack";
		case "lato-adobe-600-customstack":
			return "Lato Adobe + 600 + custom font stack";
		case "lato-adobe-customstack":
			return "Lato Adobe + custom font stack";
		case "lato-adobe-600":
			return "Lato Adobe + 600 + standard font stack";
		case "lato-adobe":
			return "Lato Adobe + standard font stack";
		case "current":
			return "Google lato v13 standard font stack";
		case "next":
			return "Lato 2 subset, updated font stack";
		case "stack-test":
			return "Super stack test";
		default:
			throw new Error(`Unknown page type ${page}`);
	}
}
