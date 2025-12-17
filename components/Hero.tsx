'use client';

import { Button } from '@/components/ui/button';
import { RepellingText } from '@/components/ui/repelling-text';
import { TypewriterText } from '@/components/ui/typewriter-text';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    isEnglish: boolean;
}

export function Hero({ isEnglish }: HeroProps) {
    // Title text for length calculation
    const titleText = isEnglish
        ? "Everything University Doesn't Teach You."
        : "那些大学不会教你的事。";

    // Speed values
    const titleSpeed = isEnglish ? 0.04 : 0.08;

    // Calculate delay: character count * speed + small buffer
    const subtitleDelay = titleText.length * titleSpeed + 0.2;

    return (
        <section className="w-full py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col items-center text-center space-y-6">
                    <RepellingText
                        key={isEnglish ? 'en' : 'cn'}
                        text={titleText}
                        speed={isEnglish ? "fast" : "slow"}
                        triggerRadius={600}
                        maxDisplacement={40}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight pb-2 font-heading"
                    />

                    <TypewriterText
                        key={isEnglish ? 'en-sub' : 'cn-sub'}
                        text={isEnglish
                            ? "A curated guide to skills, money, and student life — built for Malaysian students."
                            : "为马来西亚学生打造的技能、财务和生活指南。"}
                        delay={subtitleDelay}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground w-full max-w-full sm:max-w-2xl md:max-w-3xl px-4 break-words"
                    />

                    <Button size="lg" className="text-lg gap-2">
                        {isEnglish ? "Explore Interests" : "探索兴趣"}
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
