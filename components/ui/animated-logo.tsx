"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function AnimatedLogo() {
    return (
        <div className="flex items-center gap-2">
            {/* Round Icon - Pops in with elastic spring */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-sm"
            >
                <GraduationCap className="w-6 h-6" />
            </motion.div>

            {/* Text - Slides out from left */}
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.7,
                    ease: "easeOut"
                }}
                className="font-heading font-bold text-xl tracking-tight"
            >
                StudentMU
            </motion.span>
        </div>
    );
}
