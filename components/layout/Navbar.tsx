'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';

export function Navbar() {
    const { isEnglish, toggleLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo/Brand */}
                <Link
                    href="/"
                    className="text-xl font-bold hover:opacity-80 transition-opacity"
                >
                    {isEnglish ? 'StudentMU' : 'StudentMU'}
                </Link>

                {/* Right Side: Navigation + Actions */}
                <div className="flex items-center gap-6">
                    {/* Navigation Links Group */}
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/#directory">
                                {isEnglish ? 'Categories' : '分类'}
                            </Link>
                        </Button>

                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/about">
                                {isEnglish ? 'About' : '关于'}
                            </Link>
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-border" />

                    {/* Action Buttons Group */}
                    <div className="flex items-center gap-2">
                        {/* Language Toggle */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={toggleLanguage}
                            className="h-9 px-3"
                        >
                            {isEnglish ? '中文' : 'EN'}
                        </Button>

                        {/* Theme Toggle */}
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
