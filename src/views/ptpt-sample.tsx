import { LanguageSample } from "./language-sample";

const headline = "O que é WebMD ONE?"
const lines = [
	"WebMD ONE é uma parceria entre Titan e a WebMD para ajudar você a revelar o seu melhor. Com base em suas necessidades e interesses pessoais, ajudará você a definir metas, acompanhar seu progresso, mantê-lo motivado e fornecer informações valiosas ao longo do caminho. Basta se inscrever para começar a usar nossos programas e serviços.",
	"Fale com o centro de atendimento ao cliente da WebMD pelo telefone phone at (515) 432-9876 or email at help@abcefg.com.",
];

export function PtptSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="pt-pt" />;
}
