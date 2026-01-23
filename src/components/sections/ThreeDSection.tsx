import { ComponentShowcase } from '../ComponentShowcase';
import { useState, useRef } from 'react';
import {
    motion,
    useScroll,
    useSpring,
} from "motion/react"
import ParallaxCard from './ParallaxCard';

const cubeData: { label: string; cls: string; t: string }[] = [
    { label: "Front", cls: "bg-indigo-500/90 border-indigo-300", t: "translateZ(96px)" },
    { label: "Back", cls: "bg-purple-500/90 border-purple-300", t: "rotateY(180deg) translateZ(96px)" },
    { label: "Right", cls: "bg-pink-500/90 border-pink-300", t: "rotateY(90deg) translateZ(96px)" },
    { label: "Left", cls: "bg-blue-500/90 border-blue-300", t: "rotateY(-90deg) translateZ(96px)" },
    { label: "Top", cls: "bg-cyan-500/90 border-cyan-300", t: "rotateX(90deg) translateZ(96px)" },
    { label: "Bottom", cls: "bg-teal-500/90 border-teal-300", t: "rotateX(-90deg) translateZ(96px)" },
]

export default function ThreeDSection() {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);
    const parallaxContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: innerScrollProgress } = useScroll({
        container: parallaxContainerRef,
    });

    const scaleX = useSpring(innerScrollProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">3D Interactions</h1>
                <p className="text-slate-600">
                    Immersive 3D elements and interactions using CSS transforms and animations to create depth and engagement.
                </p>
            </div>

            {/* 3D Card Tilt */}
            <ComponentShowcase
                title="3D Card Tilt Effect"
                description="Card that tilts based on mouse position"
                preview={
                    <div className="flex justify-center items-center py-16">
                        <div
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                                transition: 'transform 0.1s ease-out',
                            }}
                            className="w-80 h-96 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 shadow-2xl cursor-pointer"
                        >
                            <div className="h-full flex flex-col justify-between text-white">
                                <div>
                                    <h3 className="text-3xl mb-2">3D Card</h3>
                                    <p className="text-white/80">Move your mouse over this card to see the 3D tilt effect</p>
                                </div>
                                <div className="text-sm text-white/60">Hover to interact</div>
                            </div>
                        </div>
                    </div>
                }
                code={`import { useState, useRef } from 'react';

function ThreeDCard() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`,
        transition: 'transform 0.1s ease-out',
      }}
      className="w-80 h-96 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl p-8"
    >
      <h3>3D Card</h3>
      <p>Move your mouse to see the effect</p>
    </div>
  );
}`}
            />

            {/* Flip Card */}
            <ComponentShowcase
                title="3D Flip Card"
                description="Card that flips to reveal content"
                preview={
                    <div className="flex justify-center py-16">
                        <motion.div
                            className="w-80 h-96 cursor-pointer"
                            style={{ perspective: '1000px' }}
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                                {/* Front */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 flex items-center justify-center text-white shadow-xl"
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🎨</div>
                                        <h3 className="text-2xl">Hover Me</h3>
                                    </div>
                                </div>
                                {/* Back */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 flex items-center justify-center text-white shadow-xl"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                    }}
                                >
                                    <div className="text-center">
                                        <h3 className="text-2xl mb-4">Back Side</h3>
                                        <p className="text-white/90">This is the hidden content revealed on flip!</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                }
                code={`import { motion } from 'motion/react';

function FlipCard() {
  return (
    <motion.div
      className="w-80 h-96 cursor-pointer"
      style={{ perspective: '1000px' }}
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {/* Front */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h3>Front Side</h3>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3>Back Side</h3>
        </div>
      </div>
    </motion.div>
  );
}`}
            />

            {/* 3D Button */}
            <ComponentShowcase
                title="3D Buttons"
                description="Buttons with depth and shadow"
                preview={
                    <div className="flex flex-wrap gap-6 justify-center">
                        <button
                            className="relative px-8 py-4 bg-indigo-600 text-white rounded-xl transition-all hover:-translate-y-1"
                            style={{
                                boxShadow: '0 8px 0 #4338ca, 0 10px 20px rgba(0,0,0,0.3)',
                            }}
                            onMouseDown={(e) => {
                                e.currentTarget.style.transform = 'translateY(4px)';
                                e.currentTarget.style.boxShadow = '0 4px 0 #4338ca, 0 6px 10px rgba(0,0,0,0.2)';
                            }}
                            onMouseUp={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 0 #4338ca, 0 10px 20px rgba(0,0,0,0.3)';
                            }}
                        >
                            Press Me
                        </button>

                        <button
                            className="relative px-8 py-4 bg-pink-500 text-white rounded-xl transition-all hover:-translate-y-1"
                            style={{
                                boxShadow: '0 8px 0 #db2777, 0 10px 20px rgba(0,0,0,0.3)',
                            }}
                            onMouseDown={(e) => {
                                e.currentTarget.style.transform = 'translateY(4px)';
                                e.currentTarget.style.boxShadow = '0 4px 0 #db2777, 0 6px 10px rgba(0,0,0,0.2)';
                            }}
                            onMouseUp={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 0 #db2777, 0 10px 20px rgba(0,0,0,0.3)';
                            }}
                        >
                            Click Me
                        </button>

                        <button
                            className="relative px-8 py-4 bg-green-500 text-white rounded-xl transition-all hover:-translate-y-1"
                            style={{
                                boxShadow: '0 8px 0 #16a34a, 0 10px 20px rgba(0,0,0,0.3)',
                            }}
                            onMouseDown={(e) => {
                                e.currentTarget.style.transform = 'translateY(4px)';
                                e.currentTarget.style.boxShadow = '0 4px 0 #16a34a, 0 6px 10px rgba(0,0,0,0.2)';
                            }}
                            onMouseUp={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 0 #16a34a, 0 10px 20px rgba(0,0,0,0.3)';
                            }}
                        >
                            Push Me
                        </button>
                    </div>
                }
                code={`function ThreeDButton() {
  return (
    <button
      className="px-8 py-4 bg-indigo-600 text-white rounded-xl transition-all hover:-translate-y-1"
      style={{
        boxShadow: '0 8px 0 #4338ca, 0 10px 20px rgba(0,0,0,0.3)',
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(4px)';
        e.currentTarget.style.boxShadow = '0 4px 0 #4338ca';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 0 #4338ca, 0 10px 20px rgba(0,0,0,0.3)';
      }}
    >
      Press Me
    </button>
  );
}`}
            />

            {/* Floating Elements */}
            <ComponentShowcase
                title="Floating 3D Elements"
                description="Elements that float in 3D space"
                preview={
                    <div
                        className="relative h-96 w-full  rounded-2xl overflow-hidden"
                        style={{
                            background: "rgb(15, 23, 42)",
                            perspective: "1000px",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {[
                            { delay: 0, x: -100, y: -50 },
                            { delay: 0.5, x: 100, y: -30 },
                            { delay: 1, x: -80, y: 50 },
                            { delay: 1.5, x: 120, y: 40 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="absolute w-20 h-20 rounded-xl"
                                style={{
                                    left: `calc(50% + ${item.x}px)`,
                                    top: `calc(50% + ${item.y}px)`,
                                    // IMPORTANT: position via translate so transforms don’t fight layout
                                    transform: `translate(calc(-50% + ${item.x}px), calc(-50% + ${item.y}px)) translateZ(60px)`,
                                    backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)",
                                    boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
                                    backfaceVisibility: "hidden",
                                }}
                                animate={{
                                    y: [item.y, item.y - 20, item.y],
                                    rotateX: [0, 360],
                                    rotateY: [0, 360],
                                }}
                                transition={{
                                    duration: 4,
                                    delay: item.delay,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                }
                code={`
import { motion } from "motion/react";

function FloatingElements() {
  const items = [
    { delay: 0, x: -100, y: -50 },
    { delay: 0.5, x: 100, y: -30 },
    { delay: 1, x: -80, y: 50 },
  ];

  return (
    <div
      className="relative h-96 w-full rounded-2xl overflow-hidden"
      style={{ perspective: "1000px", background: "#0f172a" }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="absolute w-20 h-20 rounded-xl"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) translateZ(60px)",
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
          }}
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}`}
            />
            {/* Parallax Layers */}
            <ComponentShowcase
                title="Parallax 3D Layers"
                description="Layered elements with depth on hover"
                preview={
                    <div className="w-full">
                        {/* Scrollable frame */}
                        <div
                            ref={parallaxContainerRef}
                            className="relative h-96 w-full overflow-y-auto rounded-2xl"
                            style={{
                                background: "linear-gradient(to bottom, #0b1020, #111827)",
                            }}
                        >
                            {/* sticky progress bar (stays inside frame) */}
                            <div className="sticky top-0 z-10 p-3">
                                <div className="h-2 w-full rounded bg-white/10 overflow-hidden">
                                    <motion.div
                                        className="h-full origin-left"
                                        style={{
                                            scaleX,
                                            backgroundImage: "linear-gradient(90deg, #6366f1, #a855f7)",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="px-4 pb-6 space-y-6">
                                <div className="pt-2 text-white/80 text-sm">
                                    Scroll inside this box 👇
                                </div>

                                {[1, 2, 3, 4, 5].map((i) => (
                                    <ParallaxCard key={i} index={i} containerRef={parallaxContainerRef} />
                                ))}
                            </div>
                        </div>
                    </div>
                }
                code={`
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function ParallaxCard() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="h-40 rounded-xl flex items-center justify-center text-white text-3xl"
      style={{
        background: "linear-gradient(135deg, #6366f1, #a855f7)",
      }}
    >
      Parallax Layer
    </motion.div>
  );
}

function ParallaxLayers() {
  return (
    <div className="h-96 overflow-y-auto space-y-12 p-6 rounded-2xl bg-slate-900">
      <ParallaxCard />
      <ParallaxCard />
      <ParallaxCard />
    </div>
  );
}`}
            />
            {/* Cube */}
            <ComponentShowcase
                title="Rotating 3D Cube"
                description="Animated 3D cube with CSS transforms"
                preview={
                    <div
                        className="w-full flex justify-center items-center py-16"
                        style={{
                            //Prevent compositor bleed into page
                            isolation: "isolate",
                            contain: "layout paint",
                            overflow: "hidden",
                        }}
                    >
                        <div className="w-48 h-48" style={{ perspective: '800px' }}>
                            <motion.div
                                animate={{ rotateX: 360, rotateY: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full relative"
                                style={{
                                    transformStyle: "preserve-3d",
                                    willChange: "transform",
                                    //Forces a clean composited layer
                                    transform: "translateZ(0)",
                                }}
                            >
                                {cubeData.map((f) => (
                                    <div
                                        key={f.label}
                                        className={`absolute inset-0 border-2 flex items-center justify-center text-white ${f.cls}`}
                                        style={{
                                            transform: f.t,
                                            backfaceVisibility: "hidden",
                                            WebkitBackfaceVisibility: "hidden",
                                        }}
                                    >
                                        {f.label}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                }
                code={`
import { motion } from "motion/react";

function ThreeDCube() {
  return (
    <div className="w-48 h-48" style={{ perspective: "800px" }}>
      <motion.div
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 bg-indigo-500/90 border-2 flex items-center justify-center text-white"
          style={{ transform: "translateZ(96px)" }}
        >
          Front
        </div>

        <div
          className="absolute inset-0 bg-purple-500/90 border-2 flex items-center justify-center text-white"
          style={{ transform: "rotateY(180deg) translateZ(96px)" }}
        >
          Back
        </div>

        <div
          className="absolute inset-0 bg-pink-500/90 border-2 flex items-center justify-center text-white"
          style={{ transform: "rotateY(90deg) translateZ(96px)" }}
        >
          Right
        </div>

        <div
          className="absolute inset-0 bg-blue-500/90 border-2 flex items-center justify-center text-white"
          style={{ transform: "rotateY(-90deg) translateZ(96px)" }}
        >
          Left
        </div>
      </motion.div>
    </div>
  );
}`}
            />
        </div>
    );
}
