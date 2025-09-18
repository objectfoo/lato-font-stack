import { LanguageSample } from "./language-sample";

const headline = "อะไร WebMD ONE?";
const lines = [
	"WebMD ONE คือความเป็นพันมิตรระหว่าง Titan กับ WebMD ที่ช่วยให้คุณใช้ประสิทธิภาพได้ในระดับสูงสุด จะช่วยให้คุณกำหนดเป้าหมาย ติดตามความคืบหน้า สร้างแรงขับเคลื่อน และจัดหาข้อมูลที่มีคุณค่าได้ตลอดกระบวนการ โดยอ้างอิงจากความต้องการและความสนใจส่วนบุคคลของคุณ เพียงลงทะเบียนเพื่อเริ่มต้นใช้งานโปรแกรมและบริการของเรา",
	"ติดต่อศูนย์บริการลูกค้าของ WebMD ทางโทรศัพท์ที่ โทรได้ที่ (515) 432-9876 หรืออีเมลไปที่ help@abcefg.com"
];

export function ThSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="th" />;
}
