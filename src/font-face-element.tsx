export interface FontFaceData {
	fontFamily: string;
	src: string;
	unicodeRange?: string[];
	fontDisplay?: FontDisplay;
	fontStretch?: CanvasFontStretch;
	fontStyle?: "normal"|"italic";
	fontWeight?: string|number;
	sizeAdjust?: string; /* percentage */
}

// export function FontFaceStyle(props: { id: number; fontFaceData: FontFaceData; }): React.ReactNode {

// }

{/* <link rel="stylesheet" href="https://use.typekit.net/cvr1del.css"></link> */}
