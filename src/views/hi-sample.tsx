import { LanguageSample } from "./language-sample";

const headline = "क्या है WebMD ONE?";
const lines = [
	"WebMD ONE यह इसके बीच एक पार्टनरशिप है Titan तथा WebMD आपको अपना सर्वश्रेष्ठ प्रस्तुत करने में सहायता करता है। आपकी व्यक्तिगत आवश्यकताओं के आधार पर, यह आपको लक्ष्य निर्धारित करने, आपकी प्रगति ट्रैक करने, आपको प्रेरित रखने में सहायता करेगा, तथा साथ ही महत्वपूर्ण जानकारी प्रदान करेगा। हमारे कार्यक्रमों एवं सेवाओं के साथ शुरुआत करने के लिए रजिस्टर करें।",
	"(515) 432-9876 पर फ़ोन लगाएं या फिर help@abcefg.com पर ईमेल करें पर फोन करके WebMD ग्राहक सेवा केंद्र से संपर्क करें।"
];

export function HiSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="hi" />;
}
