'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { directoryPillars } from '@/data/data';
import { Zap, TrendingUp, Coffee, GraduationCap, LucideIcon } from 'lucide-react';

interface DirectoryProps {
    isEnglish: boolean;
}

export function Directory({ isEnglish }: DirectoryProps) {
    // Map icon names to Lucide icon components
    const iconMap: Record<string, LucideIcon> = {
        "Zap": Zap,
        "TrendingUp": TrendingUp,
        "Coffee": Coffee,
        "GraduationCap": GraduationCap,
    };

    // Color schemes for each category
    const colorMap: Record<string, { bg: string; icon: string }> = {
        "Zap": { bg: "bg-purple-100 dark:bg-purple-950/30", icon: "text-purple-600 dark:text-purple-400" },
        "TrendingUp": { bg: "bg-green-100 dark:bg-green-950/30", icon: "text-green-600 dark:text-green-400" },
        "Coffee": { bg: "bg-amber-100 dark:bg-amber-950/30", icon: "text-amber-600 dark:text-amber-400" },
        "GraduationCap": { bg: "bg-blue-100 dark:bg-blue-950/30", icon: "text-blue-600 dark:text-blue-400" },
    };

    return (
        <section id="directory" className="w-full py-16 bg-muted/50">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {isEnglish ? "Explore by Category" : "分类浏览"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {directoryPillars.map((pillar) => {
                        const Icon = iconMap[pillar.iconName];
                        const colors = colorMap[pillar.iconName];

                        return (
                            <Card key={pillar.id} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                                <CardHeader>
                                    {/* Icon Container with Category-Specific Colors */}
                                    <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center mb-3`}>
                                        <Icon className={`w-6 h-6 ${colors.icon}`} strokeWidth={2} />
                                    </div>
                                    <CardTitle className="text-2xl">
                                        {isEnglish ? pillar.title : pillar.titleCN}
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {isEnglish ? pillar.description : pillar.descriptionCN}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
