'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const aboutData = {
    mission: {
        title_en: "University teaches theory. We teach real life.",
        title_cn: "大学教的是理论，我们教你现实生活。",
        description_en: "Student Interest Guide exists to help Malaysian students survive university and prepare for life after it — skills, money, and everyday decisions that actually matter.",
        description_cn: "Student Interest Guide 的存在，是为了帮助马来西亚大学生熬过大学，并为毕业后的现实生活做好准备——专注真正有用的技能、金钱和选择。"
    },
    story: {
        title_en: "Why we built this",
        title_cn: "我们为什么要做这个",
        description_en: "As students, we were tired of digging through TikTok, Reddit, Telegram groups, and outdated blogs just to find basic answers. Trading info was either shady, skill guides were too abstract, and even finding a decent place to study felt like guesswork. We built this as one simple place to collect what actually works in Malaysia.",
        description_cn: "身为学生，我们厌倦了为了找答案而翻遍 TikTok、Reddit、Telegram 群和过时的部落格。投资资讯要么很可疑，技能教学太空泛，连找个能久坐学习的地方都靠运气。于是我们决定，把在马来西亚真正有用的东西集中在一个地方。"
    },
    values: [
        {
            title_en: "No Scams, No Fantasy",
            title_cn: "不骗人，不画大饼",
            description_en: "If something is risky, unrealistic, or straight-up nonsense, we say it as it is.",
            description_cn: "有风险、不现实、或根本不靠谱的东西，我们会直接说清楚。"
        },
        {
            title_en: "Local First",
            title_cn: "以马来西亚为主",
            description_en: "What works overseas doesn't always work here. We focus on Malaysian platforms, prices, and realities.",
            description_cn: "国外能行得通的方法，不一定适合这里。我们优先考虑马来西亚的环境、平台和成本。"
        },
        {
            title_en: "No Fluff",
            title_cn: "拒绝废话",
            description_en: "Straight to the point. Practical over motivational. Useful over impressive.",
            description_cn: "不绕圈子，不灌鸡汤。实用比好听重要。"
        }
    ],
    audience: [
        {
            text_en: "You feel university alone won't prepare you for real life",
            text_cn: "你知道只靠大学并不能为现实生活做好准备"
        },
        {
            text_en: "You want to learn skills, make money, and still enjoy student life",
            text_cn: "你想学技能、赚点钱，也不想错过学生生活"
        },
        {
            text_en: "You're tired of fake gurus and vague advice",
            text_cn: "你已经厌倦假导师和空泛的建议"
        },
        {
            text_en: "You want information that actually works in Malaysia",
            text_cn: "你需要在马来西亚真的行得通的资讯"
        }
    ]
};

export default function AboutPage() {
    const { isEnglish } = useLanguage();

    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-16 max-w-2xl">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {isEnglish ? aboutData.mission.title_en : aboutData.mission.title_cn}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {isEnglish ? aboutData.mission.description_en : aboutData.mission.description_cn}
                    </p>
                </div>

                {/* Story Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        {isEnglish ? aboutData.story.title_en : aboutData.story.title_cn}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {isEnglish ? aboutData.story.description_en : aboutData.story.description_cn}
                    </p>
                </div>

                {/* Values Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">
                        {isEnglish ? "Our Principles" : "我们的原则"}
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {aboutData.values.map((value, index) => (
                            <Card key={index} className="border-2">
                                <CardHeader>
                                    <CardTitle className="text-xl">
                                        {isEnglish ? value.title_en : value.title_cn}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {isEnglish ? value.description_en : value.description_cn}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Audience Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">
                        {isEnglish ? "This is for you if:" : "如果你符合以下情况："}
                    </h2>
                    <div className="space-y-4">
                        {aboutData.audience.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-lg text-muted-foreground">
                                    {isEnglish ? item.text_en : item.text_cn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Link href="/">
                        <Button size="lg" className="group">
                            {isEnglish ? "Explore the Guide" : "开始探索"}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
