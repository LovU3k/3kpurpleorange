'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import { AnimatedLogo } from '@/components/ui/animated-logo';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, ChevronRight } from 'lucide-react';

export function Navbar() {
    const { isEnglish, toggleLanguage } = useLanguage();
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo/Brand */}
                <Link
                    href="/"
                    className="hover:opacity-80 transition-opacity"
                >
                    <AnimatedLogo />
                </Link>

                {/* Desktop Navigation - Hidden on Mobile */}
                <div className="hidden md:flex items-center gap-6">
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

                {/* Mobile Menu - Shown on Mobile Only */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col h-full w-[240px] p-0">
                            {/* Header with Menu Title */}
                            <SheetHeader className="px-6 pt-6 pb-4 border-b text-left flex items-center">
                                <SheetTitle className="text-xl font-bold font-heading">
                                    {isEnglish ? 'Menu' : '菜单'}
                                </SheetTitle>
                            </SheetHeader>

                            {/* Main Navigation Links - Large & Bold */}
                            <nav className="flex flex-col space-y-6 py-6 px-6">
                                <Link
                                    href="/#directory"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors flex items-center justify-between group font-heading"
                                >
                                    <span>{isEnglish ? 'Categories' : '分类'}</span>
                                    <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>

                                <Link
                                    href="/about"
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors flex items-center justify-between group font-heading"
                                >
                                    <span>{isEnglish ? 'About' : '关于'}</span>
                                    <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </nav>

                            {/* Footer Settings - Pushed to Bottom */}
                            <div className="mt-auto border-t p-6 space-y-6">
                                {/* Language Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground font-medium">
                                        {isEnglish ? 'Language' : '语言'}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={toggleLanguage}
                                        className="h-8 w-14 px-0 text-xs"
                                    >
                                        {isEnglish ? '中文' : 'EN'}
                                    </Button>
                                </div>

                                {/* Theme Row */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground font-medium">
                                        {isEnglish ? 'Appearance' : '外观'}
                                    </span>
                                    <ModeToggle className="h-8 w-14" />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
