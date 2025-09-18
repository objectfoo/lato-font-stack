import { LanguageSample } from "./language-sample";

const headline = "Thế nào là WebMD ONE?";
const lines = [
	"WebMD ONE mối quan hệ hợp tác giữa Titan và WebMD để giúp bạn phát huy sức khỏe tối đa. Dựa trên nhu cầu và sở thích cá nhân của bạn, chương trình này sẽ giúp bạn đặt mục tiêu, theo dõi tiến trình, liên tục truyền động lực cho bạn và cung cấp những thông tin quý báu trong toàn bộ hành trình. Chỉ cần đăng ký để bắt đầu với các chương trình và dịch vụ của chúng tôi.",
	"Liên hệ với trung tâm dịch vụ khách hàng WebMD bằng cách gọi đến số phone at (515) 432-9876 or email at help@abcefg.com."
];

export function ViSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="vi" />;
}
