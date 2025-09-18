import { LanguageSample } from "./language-sample";

const headline = "Nedir WebMD ONE?";
const lines = [
	"WebMD ONE en iyi hâlinizi açığa çıkarmanıza yardımcı olmak için Titan ile WebMD arasında yapılan bir iş birliğidir. Kişisel gereksinimleriniz ve ilgi alanlarınıza dayalı olarak hedeflerinizi belirlemenize, ilerlemenizi takip etmenize, motivasyonunuzu yüksek tutmanıza yardımcı olacak ve yol boyunca değerli bilgiler sağlayacaktır. Program ve hizmetlerimizi kullanmaya başlamak için kaydolmanız yeterlidir.",
	"(515) 432-9876 numaralı telefonu arayın veya help@abcefg.com adresine e-posta gönderin numaralı telefondan WebMD müşteri hizmetleri merkezine ulaşın.",
];

export function TrSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="tr" />;
}
