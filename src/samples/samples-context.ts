import { createContext, useContext } from "react";

export const ALL_LANGS = "all";
export const Locales = [
	"ar", "de", "fr", "fr-ca", "he", "hi", "id", "it", "ja", "ko", "nl", "pl", "pt", "pt-pt", "sk", "th", "tr", "vi", "zh"
];

export type TLocale = (typeof Locales)[number];
export type TLanguageOption = TLocale & typeof ALL_LANGS;

export const SubViews = ["strings", "buttons"] as const;
export type TView = (typeof SubViews)[number];


type SamplesContextType = {
	lang: TLanguageOption;
	setLang: React.Dispatch<React.SetStateAction<TLanguageOption & typeof ALL_LANGS>>;
	subView: TView;
	setSubView: React.Dispatch<React.SetStateAction<TView>>;
};

export const SamplesContext = createContext<SamplesContextType | undefined>(undefined);

export function useSamplesContext() {
	const ctx = useContext(SamplesContext);
	if (!ctx) throw new Error("useSamplesContext must be used within SamplesProvider");
	return ctx;
}
