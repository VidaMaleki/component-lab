import { ComponentShowcase } from '../ComponentShowcase';
import { useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function ThreeDSection() {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

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
                    <div className="relative h-96 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {[
                                { delay: 0, x: -100, y: -50 },
                                { delay: 0.5, x: 100, y: -30 },
                                { delay: 1, x: -80, y: 50 },
                                { delay: 1.5, x: 120, y: 40 },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        y: [item.y, item.y - 20, item.y],
                                        rotateX: [0, 360],
                                        rotateY: [0, 360],
                                    }}
                                    transition={{
                                        duration: 4,
                                        delay: item.delay,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl"
                                    style={{
                                        left: `calc(50% + ${item.x}px)`,
                                        transform: 'perspective(1000px)',
                                        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                }
                code={`import { motion } from 'motion/react';

function FloatingElements() {
  return (
    <div className="relative h-96 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl">
      {[
        { delay: 0, x: -100, y: -50 },
        { delay: 0.5, x: 100, y: -30 },
      ].map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [item.y, item.y - 20, item.y],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
          }}
          className="absolute w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl"
          style={{
            left: \`calc(50% + \${item.x}px)\`,
            transform: 'perspective(1000px)',
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
                description="Layered elements with depth on scroll"
                preview={
                    <div
                        className="relative h-96 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 rounded-2xl overflow-hidden"
                        style={{ perspective: '1000px' }}
                    >
                        <motion.div
                            whileHover={{ z: 100 }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transform: 'translateZ(-100px) scale(1.1)' }}
                        >
                            <div className="text-9xl opacity-10">🌟</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ z: 50 }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transform: 'translateZ(-50px) scale(1.05)' }}
                        >
                            <div className="text-7xl opacity-20">✨</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ transform: 'translateZ(0px)' }}
                        >
                            <div className="text-center text-white">
                                <div className="text-5xl mb-4">3D Parallax</div>
                                <p className="text-white/80">Hover to see depth</p>
                            </div>
                        </motion.div>
                    </div>
                }
                code={`import { motion } from 'motion/react';

function ParallaxLayers() {
  return (
    <div
      className="relative h-96 bg-gradient-to-b from-indigo-900 to-pink-900 rounded-2xl"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{ z: 100 }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: 'translateZ(-100px) scale(1.1)' }}
      >
        <div className="text-9xl opacity-10">🌟</div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-5xl">3D Parallax</div>
      </motion.div>
    </div>
  );
}`}
            />

            {/* Cube */}
            <ComponentShowcase
                title="Rotating 3D Cube"
                description="Animated 3D cube with CSS transforms"
                preview={
                    <div className="flex justify-center items-center py-16">
                        <div className="w-48 h-48" style={{ perspective: '800px' }}>
                            <motion.div
                                animate={{ rotateX: 360, rotateY: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                className="w-full h-full relative"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front */}
                                <div
                                    className="absolute inset-0 bg-indigo-500/90 border-2 border-indigo-300 flex items-center justify-center text-white"
                                    style={{ transform: 'translateZ(96px)' }}
                                >
                                    Front
                                </div>
                                {/* Back */}
                                <div
                                    className="absolute inset-0 bg-purple-500/90 border-2 border-purple-300 flex items-center justify-center text-white"
                                    style={{ transform: 'rotateY(180deg) translateZ(96px)' }}
                                >
                                    Back
                                </div>
                                {/* Right */}
                                <div
                                    className="absolute inset-0 bg-pink-500/90 border-2 border-pink-300 flex items-center justify-center text-white"
                                    style={{ transform: 'rotateY(90deg) translateZ(96px)' }}
                                >
                                    Right
                                </div>
                                {/* Left */}
                                <div
                                    className="absolute inset-0 bg-blue-500/90 border-2 border-blue-300 flex items-center justify-center text-white"
                                    style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}
                                >
                                    Left
                                </div>
                                {/* Top */}
                                <div
                                    className="absolute inset-0 bg-cyan-500/90 border-2 border-cyan-300 flex items-center justify-center text-white"
                                    style={{ transform: 'rotateX(90deg) translateZ(96px)' }}
                                >
                                    Top
                                </div>
                                {/* Bottom */}
                                <div
                                    className="absolute inset-0 bg-teal-500/90 border-2 border-teal-300 flex items-center justify-center text-white"
                                    style={{ transform: 'rotateX(-90deg) translateZ(96px)' }}
                                >
                                    Bottom
                                </div>
                            </motion.div>
                        </div>
                    </div>
                }
                code={`import { motion } from 'motion/react';

function ThreeDCube() {
  return (
    <div className="w-48 h-48" style={{ perspective: '800px' }}>
      <motion.div
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 bg-indigo-500/90 border-2"
          style={{ transform: 'translateZ(96px)' }}
        >
          Front
        </div>
        <div
          className="absolute inset-0 bg-purple-500/90 border-2"
          style={{ transform: 'rotateY(180deg) translateZ(96px)' }}
        >
          Back
        </div>
        {/* Add other faces */}
      </motion.div>
    </div>
  );
}`}
            />
        </div>
    );
}
