"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface RepellingTextProps {
    text: string;
    className?: string;
    speed?: "fast" | "normal" | "slow";
    delay?: number;
    triggerRadius?: number;
    maxDisplacement?: number;
}

// Individual character component with repelling behavior
function RepellingChar({
    char,
    index,
    mouseX,
    mouseY,
    speed = "normal",
    triggerRadius = 200,
    maxDisplacement = 80,
}: {
    char: string;
    index: number;
    mouseX: any;
    mouseY: any;
    speed?: "fast" | "normal" | "slow";
    triggerRadius?: number;
    maxDisplacement?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Speed-based timing
    const speedMap = {
        fast: 0.04,
        normal: 0.06,
        slow: 0.08,
    };

    // Entrance animation variants
    const charVariants = {
        hidden: {
            opacity: 0,
            y: 10,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
                duration: 0.5,
            },
        },
    };

    // Magnetic repulsion physics
    const distance = useMotionValue(999);

    // Spring animations for smooth movement
    const x = useSpring(0, { stiffness: 150, damping: 15 });
    const y = useSpring(0, { stiffness: 150, damping: 15 });

    // Update character position on mouse move
    const handleMouseMove = () => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;

        const mouseXVal = mouseX.get();
        const mouseYVal = mouseY.get();

        // Calculate distance
        const distX = charCenterX - mouseXVal;
        const distY = charCenterY - mouseYVal;
        const dist = Math.sqrt(distX * distX + distY * distY);

        const repelRadius = triggerRadius; // Configurable repulsion radius

        if (dist < repelRadius && dist > 0) {
            // Calculate repulsion strength with EXPONENTIAL falloff
            // This makes only very close characters move significantly
            const normalizedDist = dist / repelRadius; // 0 to 1
            const strength = Math.pow(1 - normalizedDist, 3); // Cubic falloff - very steep!
            const pushDistance = strength * maxDisplacement; // Configurable max push distance

            // Normalize direction and apply push
            const angle = Math.atan2(distY, distX);
            x.set(Math.cos(angle) * pushDistance);
            y.set(Math.sin(angle) * pushDistance);
        } else {
            // Return to original position
            x.set(0);
            y.set(0);
        }
    };

    return (
        <motion.span
            ref={ref}
            variants={charVariants}
            style={{
                display: "inline-block",
                position: "relative",
                x,
                y,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
}

export function RepellingText({
    text,
    className = "",
    speed = "normal",
    delay = 0,
    triggerRadius = 200,
    maxDisplacement = 80,
}: RepellingTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    const chars = text.split("");

    // Speed-based timing
    const speedMap = {
        fast: 0.04,
        normal: 0.06,
        slow: 0.08,
    };

    const staggerDelay = speedMap[speed];

    // Container animation
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    // Track mouse position
    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
    };

    return (
        <motion.h1
            ref={containerRef}
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "default" }}
        >
            {chars.map((char, index) => (
                <RepellingChar
                    key={index}
                    char={char}
                    index={index}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    speed={speed}
                    triggerRadius={triggerRadius}
                    maxDisplacement={maxDisplacement}
                />
            ))}
        </motion.h1>
    );
}
