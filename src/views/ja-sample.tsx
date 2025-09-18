import { LanguageSample } from "./language-sample";

const headline = "何が WebMD ONE?";
const lines = [
	"WebMD ONE とのパートナーシップ Titan WebMDは、お客様のベストな状態を引き出すお手伝いをします。個別のニーズや興味をもとに、目標を設定し、進捗状況を追跡し、モチベーションを上げ、随時役立つ情報をお届けします。ご登録のうえ、当社のプログラムとサービスを使用して今すぐ始めましょう。",
	"WebMDのカスタマーサービスセンターにお電話で（お電話（(515) 432-9876）またはメール（help@abcefg.com）でお問い合わせください)でお問い合わせください。"
];

export function JaSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="ja" />;
}
