export interface TrendingCard {
    id: number;
    title: string;
    titleCN: string;
    tag: string;
    description?: string;
}

export interface DirectoryPillar {
    id: string;
    title: string;
    titleCN: string;
    emoji: string;
    description: string;
    descriptionCN: string;
}

export const trendingCards: TrendingCard[] = [
    {
        id: 1,
        title: "Study Cafes That Actually Let You Stay",
        titleCN: "真正适合赶作业的咖啡馆",
        tag: "Lifestyle",
    },
    {
        id: 2,
        title: "Intraday Trading with RM500?",
        titleCN: "RM500 可以开始日内交易吗？",
        tag: "Finance",
    },
    {
        id: 3,
        title: "AI Tools Every Student Is Using",
        titleCN: "学生都在用的 AI 工具",
        tag: "Skills",
    },
    {
        id: 4,
        title: "Side Hustles That Don't Scam You",
        titleCN: "不踩雷的学生副业",
        tag: "Money",
    },
    {
        id: 5,
        title: "Campus Life Hacks You Need",
        titleCN: "大学生活必备技巧",
        tag: "Campus",
    },
];

export const directoryPillars: DirectoryPillar[] = [
    {
        id: "skills",
        title: "Future Proofing",
        titleCN: "未来技能",
        emoji: "🚀",
        description: "Skills that matter beyond graduation",
        descriptionCN: "毕业后真正有用的技能",
    },
    {
        id: "finance",
        title: "Money Moves",
        titleCN: "财务智慧",
        emoji: "💰",
        description: "Finance, investing, and side hustles",
        descriptionCN: "理财、投资和副业指南",
    },
    {
        id: "lifestyle",
        title: "The Vibe",
        titleCN: "生活方式",
        emoji: "✨",
        description: "Student lifestyle and experiences",
        descriptionCN: "学生生活与体验",
    },
    {
        id: "survival",
        title: "Survival Guide",
        titleCN: "生存指南",
        emoji: "🎓",
        description: "Campus life essentials",
        descriptionCN: "校园生活必备",
    },
];

export const heroContent = {
    headline: "Everything University Doesn't Teach You.",
    headlineCN: "那些大学不会教你的事。",
    subheadline: "A curated guide to skills, money, and student life — built for Malaysian students.",
    subheadlineCN: "为马来西亚学生打造的技能、财务和生活指南。",
    ctaText: "Explore Interests",
    ctaTextCN: "探索兴趣",
};
