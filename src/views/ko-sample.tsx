import { LanguageSample } from "./language-sample";

const headline = "무엇입니까?:WebMD ONE?";
const lines = [
	"WebMD ONE파트너십 관계:TitanWebMD는 최선을 발휘하시게 돕습니다. 개인의 필요와 관심에 맞추어 목표를 설정하고 진행 상황을 추적하며 동기를 부여하고 그 과정에서 귀중한 정보를 제공하여 돕습니다. 등록만 하면 프로그램과 서비스 이용을 시작하실 수 있습니다",
	"WebMD 고객 서비스 센터(전화: (515) 432-9876 또는 이메일: help@abcefg.com)에 전화로 문의하세요."
];

export function KoSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="ko" />;
}
