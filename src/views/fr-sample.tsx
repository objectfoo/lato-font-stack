import { LanguageSample } from "./language-sample";

const headline = "Qu'est-ce que WebMD ONE?";
const lines = [
	"WebMD ONE est un partenariat entre Titan et WebMD pour vous aider à vous sentir au top. À partir de vos besoins et intérêts personnels, il vous aidera à définir vos objectifs, suivre votre progression et rester motivé(e) tout en vous fournissant régulièrement des informations intéressantes. Inscrivez-vous, et vous pourrez commencer à bénéficier de nos programmes et services.",
	"Contactez le service clientèle de WebMD par téléphone au numéro téléphone au (515) 432-9876 ou par e-mail à l'adresse help@abcefg.com."
];

export function FrSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="fr" />;
}
