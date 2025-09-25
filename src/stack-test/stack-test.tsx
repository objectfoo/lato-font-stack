import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import { MenuItem, Select } from "@mui/material";
import * as CharacterSamples from "./character-samples";

// Common characters in English, French, German, Italian, Portuguese, and Spanish
const commonLatin = [
	// Uppercase
	..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	"À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï",
	"Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Œ", "Ù", "Ú", "Û", "Ü", "Ý", "Ÿ", "Š", "Ž",
	// Lowercase
	..."abcdefghijklmnopqrstuvwxyz",
	"à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï",
	"ñ", "ò", "ó", "ô", "õ", "ö", "ø", "œ", "ù", "ú", "û", "ü", "ý", "ÿ", "š", "ž",
	// Common punctuation
	"!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":",
	";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",
	"¡", "¿", "«", "»", "‚", "„", "…", "‹", "›", "§", "¶", "·", "©", "®", "°", "€"
];

const samples = [
	{ key: "arab", chars: CharacterSamples.commonArabic },
	{ key: "chinese (zh)", chars: CharacterSamples.commonChineseZh },
	{ key: "cyrillic", chars: CharacterSamples.commonCyrillic },
	{ key: "hebrew", chars: CharacterSamples.commonHebrew },
	{ key: "hindi", chars: CharacterSamples.commonKorean },
	{ key: "japanese", chars: CharacterSamples.commonJapanese },
	{ key: "korean", chars: CharacterSamples.commonKorean },
	{ key: "latin", chars: commonLatin },
	{ key: "slovak", chars: CharacterSamples.commonSlovak },
	{ key: "turkish", chars: CharacterSamples.commonTurkish },
	{ key: "vietnamese", chars: CharacterSamples.commonVietnamese },
] as const;

type TSampleId = (typeof samples)[number]["key"];

export function StackTest(): React.ReactNode {
	const [selected, setSelected] = useState<TSampleId | undefined>("latin");
	const [variant, setVariant] = useState<TypographyProps["variant"]>("body1");
	const filtered = useMemo(() => selected === undefined ? samples : samples.filter(s => s.key === selected), [selected]);
	const fontVariants: TypographyProps["variant"][] = [
		"h1", "h2", "h3", "h4", "h5", "h6",
		"subtitle1", "subtitle2",
		"caption", "overline", "button",
		"body1", "body2",
	];

	return (
		<Box sx={{}}>
			<Stack useFlexGap spacing={2} sx={{
				flexDirection: { xs: "column", sm: "row" },
				alignItems: { xs: "stretch", sm: "center" },
				borderBottom: "1px solid #ccc",
				mb: 2,
				p: .5,
			}}>
				<Typography variant="body2" component="h1" sx={{ flexGrow: 1, flexShrink: 0 }}>Font Stack Test</Typography>
				<Select
					displayEmpty
					id="font-size-select"
					labelId="font-size-label"
					margin="none"
					onChange={(event) => { setVariant(event.target.value) }}
					size="small"
					sx={{ minWidth: 100 }}
					value={variant}
					variant="standard"
				>
					{fontVariants.map((v) => <MenuItem key={v} value={v}>{v}</MenuItem>)}
				</Select>
				<Button variant="outlined" size="small" disabled={selected === "latin"} onClick={() => { setSelected("latin") }}>Reset</Button>
				<Button variant="outlined" size="small" disabled={selected === undefined} onClick={() => { setSelected(undefined) }}>All</Button>
			</Stack>
			{filtered.map(({ key, chars }) => <CharacterGrid chars={chars} key={key} label={key} variant={variant} />)}
		</Box>
	);
}

const IsLikelyLato = (c: string): boolean => {
	return commonLatin.includes(c);
}

const gridSizeForVariant = (v: TypographyProps["variant"]): number => {
	if (v === undefined) return 48;
	if (["h1", "h2", "h3"].includes(v)) return 52;
	return 48;
}


function CharacterGrid(props: { chars: string[]; label: string; variant: TypographyProps["variant"]; }): React.ReactNode {
	const gridSize = gridSizeForVariant(props.variant)

	return (
		<>
			<Typography variant="h6" sx={{ px: 2 }} >{props.label}</Typography>
			<Box sx={{ display: "flex", flexWrap: "wrap", gap: .5, p: 1, justifyContent: "center" }}>
				{props.chars.map((char) => (
					<Box
						title={`U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`}
						key={char}
						sx={{
							overflow: "hidden",
							width: gridSize,
							height: gridSize,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							position: "relative",
							cursor: "pointer",
							backgroundColor: "#f0f0f0",
							"&:before": {
								content: '""',
								display: "block",
								borderTop: "1px solid #ddd",
								width: "100%",
								position: "absolute",
							},
							"&:after": {
								content: '""',
								display: "block",
								borderLeft: "1px solid #ddd",
								position: "absolute",
								top: 0,
								bottom: 0,
							},
							"& .latoCheck": {
								fontSize: 8,
								color: "#777",
								position: "absolute",
								top: 0,
								left: 2,
							}
						}}
					>
						{/* <svg
							width={gridSize}
							height={gridSize}
							viewBox="0 0 48 48"
							style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}
						>
							<line shape-rendering="crispEdges" x1="24" y1="0" x2="24" y2="48" stroke="#ddd" strokeWidth="hairline" />
							<line x1="0" y1="24" x2="48" y2="24" stroke="#ddd" strokeWidth="1" />
						</svg> */}

						<Typography component="div" variant={props.variant} style={{ display: "inline-block", position: "relative", zIndex: 1 }}>{char}</Typography>
						<Typography variant="caption" className="latoCheck">{IsLikelyLato(char) ? "✓" : "✕"}</Typography>
					</Box>
				))}
			</Box>
		</>
	);
}

