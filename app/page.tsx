'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Trending } from '@/components/Trending';
import { Directory } from '@/components/Directory';
import { LanguageToggle } from '@/components/LanguageToggle';

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <main className="min-h-screen">
      <LanguageToggle isEnglish={isEnglish} onToggle={() => setIsEnglish(!isEnglish)} />

      <Hero isEnglish={isEnglish} />
      <Trending isEnglish={isEnglish} />
      <Directory isEnglish={isEnglish} />
    </main>
  );
}
