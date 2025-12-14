'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { directoryPillars } from '@/data/data';

interface DirectoryProps {
    isEnglish: boolean;
}

export function Directory({ isEnglish }: DirectoryProps) {
    return (
        <section className="w-full py-16 bg-muted/50">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {isEnglish ? "Explore by Category" : "分类浏览"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {directoryPillars.map((pillar) => (
                        <Card key={pillar.id} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                            <CardHeader>
                                <div className="text-4xl mb-3">{pillar.emoji}</div>
                                <CardTitle className="text-2xl">
                                    {isEnglish ? pillar.title : pillar.titleCN}
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {isEnglish ? pillar.description : pillar.descriptionCN}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
