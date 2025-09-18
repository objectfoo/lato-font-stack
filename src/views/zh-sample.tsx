import { LanguageSample } from "./language-sample";

const headline = "什么是 WebMD ONE?";
const lines = [
	"WebMD ONE 是伙伴关系建立于 Titan 和WebMD来帮助您做到最好。 基于您的个人需求和兴趣，它将帮助您设定目标，追踪您的进展，保持您的动力，并在整个过程中提供有价值的信息。 只需简单注册即可开启我们的计划和服务。",
	"拨打电话致电(515) 432-9876或发送电子邮件至help@abcefg.com联系WebMD客户服务中心。"
];

export function ZhSample(): React.ReactNode {
	return <LanguageSample headline={headline} lines={lines} lang="zh" />;
}

