import { LanguageSample } from "./language-sample";

const headline = "Was bedeutet WebMD ONE?";
const lines = [
	"WebMD ONE ist eine Partnerschaft zwischen Titan und WebMD, um Sie dabei zu unterstützen, Ihr Potenzial voll auszuschöpfen. Auf der Grundlage Ihrer persönlichen Bedürfnisse und Interessen hilft es Ihnen, Ziele zu setzen, Ihre Fortschritte zu verfolgen, Sie zu motivieren und wertvolle Informationen zu erhalten. Melden Sie sich einfach an, um unsere Programme und Dienste zu nutzen.",
	"Sie erreichen das Kundendienstzentrum von WebMD telefonisch unter unter der Rufnummer (515) 432-9876 oder der E-Mail-Adresse help@abcefg.com."
];

export function DeSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="de" />;
}
