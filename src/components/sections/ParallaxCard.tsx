import * as React from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ParallaxCard({
    index,
    containerRef,
}: {
    index: number;
    containerRef: React.RefObject<HTMLDivElement | null>;
}) {
    const ref = React.useRef<HTMLDivElement>(null);

    // IMPORTANT: container + target => progress is based on the scroll INSIDE the preview box
    const { scrollYProgress } = useScroll({
        container: containerRef ?? undefined,
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useParallax(scrollYProgress, 60);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

    // different gradient per card
    const gradients = [
        "linear-gradient(135deg, #6366f1, #a855f7)",
        "linear-gradient(135deg, #10b981, #06b6d4)",
        "linear-gradient(135deg, #f97316, #ec4899)",
        "linear-gradient(135deg, #3b82f6, #22c55e)",
        "linear-gradient(135deg, #f59e0b, #ef4444)",
    ];

    return (
        <div ref={ref} className="relative h-64 w-full flex items-center justify-center">
            <motion.div
                style={{
                    y,
                    scale,
                    rotate,
                    backgroundImage: gradients[(index - 1) % gradients.length],
                    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                }}
                className="w-[88%] h-44 rounded-2xl border border-white/10"
            />

            <motion.div
                style={{ y: useParallax(scrollYProgress, 100) }}
                className="absolute left-6 bottom-6 text-white"
            >
                <div className="text-xs opacity-70">Card</div>
                <div className="text-2xl font-semibold">{`#00${index}`}</div>
            </motion.div>
        </div>
    );
}
