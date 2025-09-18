import { LanguageSample } from "./language-sample";

const headline = "ما هذا WebMD ONE?";
const lines = [
	"WebMD ONE شراكة بين Titan وموقع WebMD لمساعدتك في إظهار أفضل ما لديك. بناءً على احتياجاتك واهتماماتك الشخصية، سيساعدك ذلك على تحديد الأهداف ومتابعة تقدمك والاستمرار في تحفيزك وتوفير معلومات قيمة دائمُا. ما عليك سوى التسجيل للبدء في الاستفادة من برامجنا وخدماتنا.",
	"تواصل مع مركز خدمة عملاء WebMD عبر الهاتف على اتصال هاتفيًا على ‪515) 432-9876‬} أو عبر البريد الإلكتروني help@abcefg.com."
];

export function ArSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="ar" dir="rtl" />;
}
