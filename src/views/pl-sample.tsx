import { LanguageSample } from "./language-sample";

const headline = "Czym jest WebMD ONE?";
const lines = [
	"WebMD ONE współpraca partnerska pomiędzy Titan oraz WebMD, aby umożliwić Ci optymalne funkcjonowanie. W oparciu o Twoje osobiste potrzeby i zainteresowania, pomoże Ci wyznaczyć cele, śledzić postępy, utrzymać motywację i dostarczy cennych informacji po drodze. Wystarczy się zarejestrować, aby rozpocząć korzystanie z naszych programów i usług.",
	"Skontaktuj się z centrum obsługi klienta WebMD, dzwoniąc pod numer kontakt telefoniczny (515) 432-9876 lub e-mailem na adres help@abcefg.com."
];

export function PlSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="pl" />;
}
