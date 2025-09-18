import { LanguageSample } from "./language-sample";

const headline = "Apakah WebMD ONE?";
const lines = [
	"WebMD ONE kemitraan antara Titan dan WebMD untuk menolong Anda memberikan yang terbaik. Berdasarkan kebutuhan dan minat Anda, alat ini membantu Anda untuk menetapkan tujuan, mamantau kemajuan Anda, memotivasi Anda terus menerus, dan memberi informasi berharga sepanjang waktu. Cukup mendaftar untuk memulai program dan layanan kami.",
	"Hubungi pusat layanan pelanggan WebMD melalui telpon di {kontak Oleh}"
];

export function IdSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="id" />;
}
