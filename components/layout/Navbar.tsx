'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export function Navbar() {
    const { isEnglish, toggleLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
                {/* Logo/Name */}
                <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
                    {isEnglish ? 'StudentMU' : 'StudentMU'}
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/#directory"
                        className="text-sm font-medium hover:underline"
                    >
                        {isEnglish ? 'Categories' : '分类'}
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm font-medium hover:underline"
                    >
                        {isEnglish ? 'About' : '关于'}
                    </Link>

                    {/* Language Toggle */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleLanguage}
                    >
                        {isEnglish ? '中文' : 'English'}
                    </Button>
                </div>
            </div>
        </nav>
    );
}
