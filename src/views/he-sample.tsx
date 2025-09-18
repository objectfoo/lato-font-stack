import { LanguageSample } from "./language-sample";

const headline = "מהי WebMD ONE?";
const lines = [
	"WebMD ONE השותפות בין Titan ו-WebMD שתעזור לכם להיות הגרסה הכי טובה של עצמכם. בהתבסס על הצרכים והרצונות האישיים שלכם, תקבלו סיוע עם מוטיבציה, קביעת מטרות ומעקב אחרי ההתקדמות שלכם, בנוסף למידע חשוב לאורך הדרך. פשוט הרשמו כדי להתחיל ליהנות מהתוכניות והשירותים שלנו.",
	"צרו קשר עם מרכז שירות הלקוחות של WebMD בטלפון במספר התקשרו ל-(515) 432-9876 או שלחו אימייל ל-help@abcefg.com."
];

export function HeSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="he" dir="rtl" />;
}
