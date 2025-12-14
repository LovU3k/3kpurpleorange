"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    speed?: "fast" | "normal" | "slow";
}

export function TextReveal({ text, className = "", speed = "normal" }: TextRevealProps) {
    // Split text into words
    const words = text.split(" ");

    // Speed-based timing
    const speedMap = {
        fast: 0.045,    // Faster for English
        normal: 0.06,  // Default
        slow: 0.07,    // Slower for Chinese
    };

    const staggerDelay = speedMap[speed];

    // Container animation (staggers children - words)
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.02 * i
            },
        }),
    };

    // Individual character animation (slower, more cinematic)
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
                duration: 0.5, // Faster duration (was 0.8)
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
            filter: "blur(8px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, wordIndex) => (
                <motion.span
                    key={`word-${wordIndex}`}
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap"
                    }}
                >
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`char-${wordIndex}-${charIndex}`}
                            variants={child}
                            style={{ display: "inline-block" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    {/* Add space after each word except the last */}
                    {wordIndex !== words.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </motion.h1>
    );
}
