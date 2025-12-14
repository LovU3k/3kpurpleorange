'use client';

import { Hero } from '@/components/Hero';
import { Trending } from '@/components/Trending';
import { Directory } from '@/components/Directory';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { isEnglish } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero isEnglish={isEnglish} />
      <Trending isEnglish={isEnglish} />
      <Directory isEnglish={isEnglish} />
    </main>
  );
}
