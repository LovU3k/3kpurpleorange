'use client';

import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
    isEnglish: boolean;
    onToggle: () => void;
}

export function LanguageToggle({ isEnglish, onToggle }: LanguageToggleProps) {
    return (
        <Button
            variant="outline"
            size="sm"
            onClick={onToggle}
            className="fixed top-4 right-4 z-50 gap-2"
        >
            <Languages className="w-4 h-4" />
            {isEnglish ? 'CN' : 'EN'}
        </Button>
    );
}
