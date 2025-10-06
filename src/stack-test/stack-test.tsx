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
	{ key: "arabic", chars: CharacterSamples.commonArabic },
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
	const [variant, setVariant] = useState<TypographyProps["variant"]>("h2");
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
				p: .5,
				minHeight: 44,
				justifyContent: "center",
			}}>
				<Typography variant="body2" component="h1" sx={{ flexGrow: 1, flexShrink: 0, fontFamily: "monospace" }}>
					"Font Stack Test"
				</Typography>
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
			<div>
				{filtered.map(({ key, chars }) => <CharacterGrid chars={chars} key={key} label={key} variant={variant} />)}
			</div>
		</Box>
	);
}

function CharacterGrid(props: { chars: string[]; label: string; variant: TypographyProps["variant"]; }): React.ReactNode {
	const gridSize = 53;

	return (
		<>
			<Typography variant="h6" component="h2" sx={{
				mb: 1,
				fontFamily: "monospace",
				textTransform: "capitalize",
				textAlign: "center",
				position: "sticky",
				top: 0,
				backgroundColor: "#fff",
				zIndex: 10,
				borderBottom: "1px solid #ccc",
				py: 1,
			}}>
				{props.label}
			</Typography>
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
							// background: "linear-gradient(to bottom, grey 50%, white 50%)",
							"&:before": {
								content: '""',
								display: "block",
								borderTop: "1px solid #ddd",
								width: "100%",
								position: "absolute",
								transform: "translateY(1px)",
							},
							"&:after": {
								content: '""',
								display: "block",
								borderLeft: "1px solid #ddd",
								position: "absolute",
								top: 0,
								bottom: 0,
							},
						}}
					>
						<Typography component="div" variant={props.variant} style={{ display: "inline-block", position: "relative", zIndex: 1 }}>{char}</Typography>
					</Box>
				))}
			</Box>
		</>
	);
}

