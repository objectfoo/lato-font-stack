import { LanguageSample } from "./language-sample";

const headline = "Wat is WebMD ONE?";
const lines = [
	"WebMD ONE is een partnerschap tussen Titan en WebMD om je te helpen het beste uit jezelf te halen. Op basis van jouw persoonlijke behoeften en interesses helpt het je om doelen vast te stellen, je voortgang te volgen, gemotiveerd te blijven en geeft het je tijdens het traject waardevolle informatie. Je hoeft je alleen maar aan te melden om aan de slag te gaan met onze programma's en diensten.",
	"Neem telefonisch contact op met de klantenservice van WebMD via bel (515) 432-9876 of e-mail naar help@abcefg.com.",
];

export function NlSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="nl" />;
}
