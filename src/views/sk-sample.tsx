import { LanguageSample } from "./language-sample";

const headline = "Čo je WebMD ONE?";
const lines = [
	"WebMD ONE je vzťah medzi Titan a WebMD, aby ste dali zo seba to najlepšie. Pomôže vám to vzhľadom na vaše potreby a záujmy stanoviť ciele, sledovať pokrok, udržať si motiváciu a získať cenné informácie. Ak sa chcete zapojiť do našich programov a využívať naše služby, stačí sa zaregistrovať.",
	"Kontaktujte zákaznícky servis WebMD telefonicky na čísle zavolajte na (515) 432-9876 alebo pošlite e-mail na adresu help@abcefg.com."
];

export function SkSample(): React.ReactNode {
	return <LanguageSample {...{headline, lines}} lang="sk" />;
}
