'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
    const { isEnglish } = useLanguage();

    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <div className="text-sm text-muted-foreground text-center md:text-left">
                        <p>
                            {isEnglish
                                ? '© 2025 StudentMU. Built for Malaysian Students.'
                                : '© 2025 StudentMU. 为马来西亚学生打造。'}
                        </p>
                        <p className="text-xs mt-1">Creator: LZC</p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/submit"
                            className="text-sm font-medium hover:underline"
                        >
                            {isEnglish ? 'Submit a Place' : '提交地点'}
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium hover:underline"
                        >
                            {isEnglish ? 'Contact' : '联系我们'}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
