"use client";

import { motion } from "framer-motion";
import React from "react";

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
    cursor?: React.ReactNode;
}

export function TypewriterText({ text, className = "", delay = 0, cursor }: TypewriterTextProps) {
    // Variants for the container to control stagger
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.025, // Faster typing (was 0.05)
                delayChildren: delay
            }
        }
    };

    // Variants for each letter (appear instantly to mimic typing)
    const child = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.01 // Very fast, instant appearance
            }
        }
    };

    // Split by spaces and merge em dashes with following words
    const rawWords = text.split(" ");
    const words = rawWords.reduce((acc: string[], word, index) => {
        // If this word is just an em dash and there's a next word, merge them
        if ((word === "—" || word === "–") && index < rawWords.length - 1) {
            return acc; // Skip this word, will be merged with next
        }
        // If previous word was an em dash, prepend it to current word
        if (index > 0 && (rawWords[index - 1] === "—" || rawWords[index - 1] === "–")) {
            acc.push(rawWords[index - 1] + word);
        } else {
            acc.push(word);
        }
        return acc;
    }, []);

    // Default cursor: Solid Block (Notion/Brutalist style)
    const defaultCursor = (
        <span className="inline-block w-2.5 h-5 bg-foreground ml-1 align-middle mb-1" />
    );

    // Calculate total character count for cursor timing
    const totalChars = text.length;

    return (
        <div className="w-full flex justify-center -ml-8">
            <motion.p
                className={`${className} text-center`}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                        {word.split("").map((char, charIndex) => (
                            <motion.span key={charIndex} variants={child}>
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
                {/* Blinking Cursor */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0, 1, 0, 1, 1, 1, 0] }}
                    transition={{
                        duration: 5,
                        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.9, 1],
                        delay: delay + (totalChars * 0.03)
                    }}
                    style={{ transition: "opacity 0s" }}
                >
                    {cursor || defaultCursor}
                </motion.span>
            </motion.p>
        </div>
    );
}
