export interface TrendingCard {
    id: number;
    title: string;
    titleCN: string;
    tag: string;
    description?: string;
    descriptionCN?: string;
    link?: string;
}

export interface DirectoryPillar {
    id: string;
    title: string;
    titleCN: string;
    iconName: string;
    description: string;
    descriptionCN: string;
}

export const trendingCards: TrendingCard[] = [
    {
        id: 1,
        title: "Best Free Tools with Student Email",
        titleCN: "学生邮箱能白嫖的工具清单",
        tag: "Skills",
        description: "A curated list of software, AI tools, and subscriptions you can unlock using a .edu or university email — no scams, no trials.",
        descriptionCN: "精选软件、AI 工具和订阅服务清单，使用 .edu 或大学邮箱即可解锁 — 无套路，无试用陷阱。",
    },
    {
        id: 2,
        title: "Study Cafes That Actually Let You Stay",
        titleCN: "真正适合赶作业的咖啡馆",
        tag: "Lifestyle",
        description: "Curated cafes in Subang, PJ, and KL with plugs, WiFi, and zero pressure to leave.",
        descriptionCN: "精选 Subang、PJ 和 KL 的咖啡馆，有插座、WiFi，不赶人。",
        link: "/lifestyle/study-cafes",
    },
    {
        id: 3,
        title: "Intraday Trading with RM500?",
        titleCN: "RM500 可以开始日内交易吗？",
        tag: "Finance",
        description: "A realistic breakdown of risk, platforms, and why most students lose money.",
        descriptionCN: "真实分析风险、平台选择，以及为什么大多数学生会亏钱。",
    },
    {
        id: 4,
        title: "AI Tools Every Student Is Using",
        titleCN: "学生都在用的 AI 工具",
        tag: "Skills",
        description: "Free and student-friendly AI tools for studying, presentations, and resumes.",
        descriptionCN: "免费且适合学生的 AI 工具，用于学习、演示和简历制作。",
    },
    {
        id: 5,
        title: "Side Hustles That Don't Scam You",
        titleCN: "不踩雷的学生副业",
        tag: "Money",
        description: "Legit side hustles Malaysian students are actually earning from.",
        descriptionCN: "马来西亚学生真正在赚钱的正规副业。",
    },
    {
        id: 6,
        title: "Campus Life Hacks You Need",
        titleCN: "大学生活必备技巧",
        tag: "Campus",
        description: "Essential campus life tips and hacks that make university easier.",
        descriptionCN: "让大学生活更轻松的必备技巧与窍门。",
    },
];

export const directoryPillars: DirectoryPillar[] = [
    {
        id: "skills",
        title: "Future Proofing",
        titleCN: "未来技能",
        iconName: "Zap",
        description: "Skills that matter beyond graduation",
        descriptionCN: "毕业后真正有用的技能",
    },
    {
        id: "finance",
        title: "Money Moves",
        titleCN: "财务智慧",
        iconName: "TrendingUp",
        description: "Finance, investing, and side hustles",
        descriptionCN: "理财、投资和副业指南",
    },
    {
        id: "lifestyle",
        title: "The Vibe",
        titleCN: "生活方式",
        iconName: "Coffee",
        description: "Student lifestyle and experiences",
        descriptionCN: "学生生活与体验",
    },
    {
        id: "survival",
        title: "Survival Guide",
        titleCN: "生存指南",
        iconName: "GraduationCap",
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
