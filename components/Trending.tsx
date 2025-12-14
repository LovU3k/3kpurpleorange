'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trendingCards } from '@/data/data';

interface TrendingProps {
    isEnglish: boolean;
}

export function Trending({ isEnglish }: TrendingProps) {
    return (
        <section className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {isEnglish ? "Trending Now" : "热门话题"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingCards.map((card) => (
                        card.link ? (
                            <Link key={card.id} href={card.link}>
                                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <Badge variant="secondary">{card.tag}</Badge>
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
                                        <Badge variant="secondary">{card.tag}</Badge>
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
