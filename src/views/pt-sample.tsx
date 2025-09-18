import { LanguageSample } from "./language-sample";

const headline = "O que é WebMD ONE?";
const lines = [
	"WebMD ONE é uma parceria entre Titan e a WebMD para ajudar você a revelar o seu melhor. Com base em suas necessidades e interesses pessoais, ajudará você a definir metas, acompanhar seu progresso, mantê-lo motivado e fornecer informações valiosas ao longo do caminho. Basta se inscrever para começar a usar nossos programas e serviços.",
	"Fale com o centro de atendimento ao cliente da WebMD pelo telefone ligue para (515) 432-9876 ou envie um e-mail para help@abcefg.com."
];

export function PtSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="pt" />;
}
