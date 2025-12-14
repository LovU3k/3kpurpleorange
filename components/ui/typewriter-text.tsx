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

    const chars = text.split("");

    // Default cursor: Solid Block (Notion/Brutalist style)
    const defaultCursor = (
        <span className="inline-block w-2.5 h-5 bg-foreground ml-1 align-middle mb-1" />
    );

    return (
        <div className="w-full flex justify-center -ml-8">
            <motion.p
                className={`${className} text-center`}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {chars.map((char, index) => {
                    // Wrap the last 10 characters + cursor in a non-breaking container
                    if (index === chars.length - 10) {
                        return (
                            <span key={`wrapper-${index}`} style={{ whiteSpace: "nowrap" }}>
                                {chars.slice(index).map((c, i) => (
                                    <motion.span key={`${index}-${i}`} variants={child}>
                                        {c === " " ? "\u00A0" : c}
                                    </motion.span>
                                ))}
                                {/* Blinking Cursor */}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0, 1, 0, 1, 0] }}
                                    transition={{
                                        duration: 3,
                                        times: [0, 0.15, 0.33, 0.5, 0.67, 0.85, 1],
                                        delay: delay + (text.length * 0.03)
                                    }}
                                    style={{ transition: "opacity 0s" }}
                                >
                                    {cursor || defaultCursor}
                                </motion.span>
                            </span>
                        );
                    }

                    // Skip characters that are part of the wrapped group
                    if (index > chars.length - 10) {
                        return null;
                    }

                    return (
                        <motion.span key={index} variants={child}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    );
                })}
            </motion.p>
        </div>
    );
}
