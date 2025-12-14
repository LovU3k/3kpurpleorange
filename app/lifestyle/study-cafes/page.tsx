'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cafeData } from '@/components/data/cafes';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StudyCafesPage() {
    const { isEnglish } = useLanguage();

    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                {/* Page Title */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {isEnglish ? 'Study Cafes That Actually Let You Stay' : '真正适合赶作业的咖啡馆'}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {isEnglish
                            ? 'Curated cafes in Subang, PJ, and KL with plugs, WiFi, and zero pressure to leave.'
                            : '精选 Subang、PJ 和 KL 的咖啡馆，有插座、WiFi，不赶人。'}
                    </p>
                </div>

                {/* Cafes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cafeData.map((cafe) => (
                        <Card key={cafe.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="secondary">{cafe.price_level}</Badge>
                                </div>
                                <CardTitle className="text-xl">{cafe.title}</CardTitle>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{cafe.location}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {isEnglish ? cafe.description_en : cafe.description_cn}
                                </p>
                                <a
                                    href={cafe.google_maps_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium hover:underline"
                                >
                                    {isEnglish ? 'View on Google Maps →' : '在 Google 地图查看 →'}
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
