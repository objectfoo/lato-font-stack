import Box from "@mui/material/Box";

export interface SampleContainerProps {
	lang: string;
	dir: "rtl"|"ltr";
	children: React.ReactNode;
}

export function SampleContainer(props: SampleContainerProps): React.ReactNode {
	return (
		<Box lang={props.lang} dir={props.dir}>
			{props.children}
		</Box>
	);
}
