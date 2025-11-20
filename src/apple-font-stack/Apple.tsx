import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import CreateTheme, { type FontStackId } from "./CreateTheme";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export function Apple() {
	const [value, setValue] = React.useState("mobile");
	const handleChange = (v: string) => {
		setValue(v as FontStackId);
	};

	return (
		<ThemeProvider theme={CreateTheme("#3557FF", value as FontStackId)}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: "end", mb: 1 }}>
					<RadioGroup
						row
						value={value}
						onChange={(e) => handleChange(e.target.value)}
						name="radio-buttons-group"
					>
						<FormControlLabel value="std" control={<Radio />} label="std" />
						<FormControlLabel
							value="mobile"
							control={<Radio />}
							label="mobile"
						/>
					</RadioGroup>
				</Box>
				<Typography variant="h3" gutterBottom>
					Striking Headline variant 3
				</Typography>
				<Typography variant="subtitle1" sx={{ mb: 4 }}>
					{text()}
				</Typography>
				<EntitledNapkin title="Headline h4">
					<Typography variant={"body1"}>{text(1)}</Typography>
					<Typography variant={"body1"}>{text(2)}</Typography>
					<Typography variant={"body1"}>{text(3)}</Typography>
					<Typography variant={"body1"}>{text(4)}</Typography>
				</EntitledNapkin>
				<EntitledNapkin title="Headline h4 Headline headline h4 h4 h4 headline">
					<Typography variant={"body2"}>{text(5)}</Typography>
					<Typography variant={"body2"}>{text(6)}</Typography>
					<Typography variant={"body2"}>{text(7)}</Typography>
					<Typography variant={"body2"}>{text(8)}</Typography>
				</EntitledNapkin>
			</Container>
		</ThemeProvider>
	);
}

function EntitledNapkin({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}): React.JSX.Element {
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				{title}
			</Typography>
			<Paper variant="outlined" sx={{ maxWidth: 600, px: 2, py: 2, mb: 4 }}>
				{children}
			</Paper>
		</div>
	);
}

const txt = [
	"Tone Selection: Users can choose from various writing styles (formal, casual, friendly, etc.) to match their needs.",
	"Number of Sentences: Users can specify the number of sentences to generate for each task.",
	"Length of Sentences: Options are available for different sentence lengths (short, medium, long, very long).",
	"Multiple Use Cases: The application supports content creation for blogs, social media posts, emails, and more.",
	"User-Friendly Interface: The generator allows for easy input and quick generation of sentences with just a click.",
	"Facilitates effortless sentence creation for writers, marketers, and creatives, enhancing their productivity.",
	"Offers customization options for tone, length, and number of sentences, allowing users to tailor outputs to specific needs.",
	"Saves time by quickly generating high-quality sentences, reducing the effort required for drafting and reviewing.",
	"Provides accurate sentence generation, making it a reliable tool across various industries.",
	"Supports diverse use cases, including content creation, marketing materials, educational resources, and creative writing.",
];

function text(idx?: number) {
	return txt[idx ?? getRandomIntInclusive(0, txt.length - 1)];
}

function getRandomIntInclusive(min: number, max: number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
