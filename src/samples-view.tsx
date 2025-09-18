import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ArSample } from "./views/ar-sample";
import { DeSample } from "./views/de-sample";
import { FrCaSample } from "./views/frca-sample";
import { FrSample } from "./views/fr-sample";
import { HeSample } from "./views/he-sample";
import { HiSample } from "./views/hi-sample";
import { IdSample } from "./views/id-sample";
import { ItSample } from "./views/it-sample";
import { JaSample } from "./views/ja-sample";
import { KoSample } from "./views/ko-sample";
import { NlSample } from "./views/nl-sample";
import { PlSample } from "./views/pl-sample";
import { PtptSample } from "./views/ptpt-sample";
import { PtSample } from "./views/pt-sample";
import { SkSample } from "./views/sk-sample";
import { ThSample } from "./views/th-sample";
import { TrSample } from "./views/tr-sample";
import { useMemo, useState } from "react";
import { ViSample } from "./views/vi-sample";
import { ZhSample } from "./views/zh-sample";
import { createContext, useContext } from "react";

const ALL_LANGS = "all";

const LanguageMap = [
	["ar", ArSample],
	["de", DeSample],
	["fr", FrSample],
	["fr-ca", FrCaSample],
	["he", HeSample],
	["hi", HiSample],
	["id", IdSample],
	["it", ItSample],
	["ja", JaSample],
	["ko", KoSample],
	["nl", NlSample],
	["pl", PlSample],
	["pt", PtSample],
	["pt-pt", PtptSample],
	["sk", SkSample],
	["th", ThSample],
	["tr", TrSample],
	["vi", ViSample],
	["zh", ZhSample],
] satisfies [string, () => React.ReactNode][];

type TLanguageKeys = typeof LanguageMap[number][0];
type TLanguageOption = TLanguageKeys & typeof ALL_LANGS;

export const views = ["language", "button"];
export type TView = typeof views[number];

type SamplesContextType = {
	lang: TLanguageOption;
	setLang: React.Dispatch<React.SetStateAction<TLanguageOption & typeof ALL_LANGS>>;
	view: TView;
	setView: React.Dispatch<React.SetStateAction<TView>>;
};

const SamplesContext = createContext<SamplesContextType | undefined>(undefined);

export function useSamplesContext() {
	const ctx = useContext(SamplesContext);
	if (!ctx) throw new Error("useSamplesContext must be used within SamplesProvider");
	return ctx;
}

export function SamplesView(): React.ReactNode {
	const [lang, setLang] = useState<TLanguageOption>(ALL_LANGS);
	const [view, setView] = useState("language");
	const filtered = useMemo(() => LanguageMap.filter(([tag]) => (lang === ALL_LANGS || lang === tag)), [lang]);	
	return (
		<SamplesContext.Provider value={{ lang, setLang, view, setView }}>
			<Container maxWidth="md" fixed>
				<SamplesBar {...{ lang, setLang, view, setView }} />
				<Stack spacing={2} direction="column">
					{filtered.map(([id, Component]) => (
						Component === undefined ? <h1>{":("}</h1> : <Component key={id} />
					))}
				</Stack>
			</Container>
		</SamplesContext.Provider>
	);
}

function SamplesBar(props: {
	lang: TLanguageOption;
	setLang: React.Dispatch<React.SetStateAction<TLanguageOption & typeof ALL_LANGS>>;
	view: TView;
	setView: React.Dispatch<React.SetStateAction<TView>>;
}): React.ReactNode {
	return (
		<AppBar position="static" elevation={0} sx={{ mb: 4 }} color="default">
			<Toolbar variant="dense">
				<IconButton href="/lato-font-stack/" edge="start" sx={{ mr: 1 }}>{HomeIcon}</IconButton>
				<Typography sx={{ flexGrow: 1, fontWeight: 300, fontSize: 16 }}>{GetTitle()}</Typography>
				<TextField
					sx={{ minWidth: 90, fontSize: 14 }}
					size="small"
					margin="dense"
					id="standard-select-currency"
					select
					value={props.lang}
					onChange={(x) => { props.setLang(x.target.value as TLanguageOption) }}
					variant="standard"
				>
					<MenuItem sx={{ fontSize: 14 }} key="all" value="all">ALL</MenuItem>
					{LanguageMap.map(([id]) => <MenuItem sx={{ fontSize: 14 }} key={id} value={id}>{id}</MenuItem>)}
				</TextField>
			</Toolbar>
		</AppBar>
	);
}

const HomeIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.077q0-.343.233-.575q.232-.233.575-.233h3q.343 0 .576.233q.232.232.232.575V19H18v-8.692q0-.154-.067-.28t-.183-.22L12.366 5.75q-.154-.134-.366-.134t-.365.134L6.25 9.808q-.115.096-.183.22t-.067.28zm-1 0v-8.692q0-.384.172-.727t.474-.565l5.385-4.078q.423-.323.966-.323t.972.323l5.385 4.077q.303.222.474.566q.172.343.172.727V19q0 .402-.299.701T18 20h-3.884q-.344 0-.576-.232q-.232-.233-.232-.576v-5.076h-2.616v5.076q0 .344-.232.576T9.885 20H6q-.402 0-.701-.299T5 19m7-6.711"/></svg>
);

function GetTitle(): string {
	const page = window.page;
	switch(page) {
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
		default:
			throw new Error(`Unknown page type ${page}`);
	}
}
