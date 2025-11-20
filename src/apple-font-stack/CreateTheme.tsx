import {
	createTheme,
	type ThemeOptions,
	type Theme,
	type PaletteMode,
} from "@mui/material";

export type FontStackId = "mobile" | "std";

export default function CreateTheme(
	color: string,
	fontStack: FontStackId
): Theme {
	return createTheme({
		typography: typography(fontStack),
		palette: palette(color, "light"),
	});
}

type TonalOffset =
	| number
	| {
		light: number;
		dark: number;
	};

const palette = (
	primary?: string,
	mode?: PaletteMode,
	tonalOffset?: TonalOffset
): NonNullable<ThemeOptions["palette"]> => ({
	tonalOffset,
	mode: mode ?? "light",
	contrastThreshold: 4.5,
	...(primary !== undefined && { primary: { main: primary } }),
	secondary: { main: "#545456" },
	...(mode !== "light" && {
		text: { primary: "#000000", secondary: "#494949", disabled: "#757575" },
	}),
	warning: { light: "#ffd683", main: "#ffbf3f", dark: "#c77700" },
	error: { light: "#bf334c", main: "#b00020", dark: "#8C0019" },
	success: { light: "#84bd00", main: "#1a6500", dark: "#103e00" },
	action: {
		disabled: "rgba(0, 0, 0, 0.56)",
		disabledBackground: "rgba(0, 0, 0, 0.1)",
		hoverOpacity: 0.033,
	},
});

/**
 * Typography overrides
 */
const defaultFontStack = ["Lato", "system-ui", "Segoe UI", "Tahoma", "sans-serif"];

const fontStack = {
	std: defaultFontStack.join(", "),
	mobile: ["-apple-system-body", ...defaultFontStack,].join(", "),
};

function typography(
	family?: "std" | "mobile"
): NonNullable<ThemeOptions["typography"]> {
	return {
		fontFamily: family === "mobile" ? fontStack.mobile : fontStack.std,
		fontWeightMedium: 600,
		h1: { fontSize: "48px", letterSpacing: "0.24992px" },
		h2: { fontSize: "36px", letterSpacing: "-0.13px" },
		h3: { fontSize: "28px" },
		h4: { fontSize: "22px", letterSpacing: "0.25px" },
		h5: { fontSize: "20px", letterSpacing: "0.25px" },
		h6: { fontSize: "18px", letterSpacing: "0.25px", fontWeight: 400 },
		subtitle1: { fontSize: "16px", letterSpacing: "0.15px", fontWeight: 400 },
		subtitle2: { fontSize: "14px", letterSpacing: "0.1px", fontWeight: 400 },
		body1: { fontSize: "16px", letterSpacing: "0.15px", fontWeight: 400 },
		body2: { fontSize: "14px", letterSpacing: "0.1px" },
		button: { fontSize: "14px", letterSpacing: "0.45px", fontWeight: 600 },
		caption: { fontSize: "12px", letterSpacing: "0.53px" },
		overline: { fontSize: "12px", letterSpacing: "1.33px" },
	};
}
