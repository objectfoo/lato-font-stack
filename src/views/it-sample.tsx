import { LanguageSample } from "./language-sample";

const headline = "Che cos'è WebMD ONE?";
const lines = [
	"WebMD ONE è una partnership tra Titan e WebMD per aiutarti a tirare fuori il meglio. In base alle tue esigenze e aree di interesse personali, ti aiuterà a stabilire i tuoi obiettivi, monitorare i tuoi progressi, mantenerti motivato e fornirti informazioni preziose lungo il percorso. Registrati per iniziare ad usare i nostri programmi e servizi.",
	"Contatta telefonicamente il centro di assistenza clienti WebMD al numero telefona al numero (515) 432-9876 o invia un'e-mail all'indirizzo help@abcefg.com."
];

export function ItSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="it" />;
}
