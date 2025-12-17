'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trendingCards } from '@/data/data';

interface TrendingProps {
    isEnglish: boolean;
}

export function Trending({ isEnglish }: TrendingProps) {
    // Map category tags to colors matching the Directory icons
    const getBadgeColor = (tag: string) => {
        const colorMap: Record<string, string> = {
            "Skills": "bg-purple-100 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
            "Finance": "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400 border-green-200 dark:border-green-800",
            "Lifestyle": "bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border-amber-200 dark:border-amber-800",
            "Money": "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400 border-green-200 dark:border-green-800",
            "Campus": "bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
        };
        return colorMap[tag] || "bg-secondary text-secondary-foreground";
    };

    return (
        <section className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
                    {isEnglish ? "Trending Now" : "热门话题"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingCards.map((card) => (
                        card.link ? (
                            <Link key={card.id} href={card.link}>
                                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <Badge className={getBadgeColor(card.tag)}>{card.tag}</Badge>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            {isEnglish ? card.title : card.titleCN}
                                        </h3>
                                        {card.description && (
                                            <p className="text-sm text-muted-foreground mt-2">
                                                {isEnglish ? card.description : (card.descriptionCN || card.description)}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        ) : (
                            <Card key={card.id} className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <Badge className={getBadgeColor(card.tag)}>{card.tag}</Badge>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {isEnglish ? card.title : card.titleCN}
                                    </h3>
                                    {card.description && (
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {isEnglish ? card.description : (card.descriptionCN || card.description)}
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}
