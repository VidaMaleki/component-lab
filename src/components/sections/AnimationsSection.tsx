import { ComponentShowcase } from '../ComponentShowcase';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Bell, ShoppingCart, Star, Zap } from 'lucide-react';
import { useState } from 'react';

export function AnimationsSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Complex Animations & Transitions</h1>
                <p className="text-slate-600">
                    Fluid, captivating animations using Motion (Framer Motion) that provide visual feedback and enhance engagement.
                </p>
            </div>

            {/* Fade In Up Animation */}
            <ComponentShowcase
                title="Fade In Up Animation"
                description="Elements animate in from below with fade effect"
                preview={
                    <div className="flex flex-wrap gap-4">
                        {[1, 2, 3, 4].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                            >
                                Item {item}
                            </motion.div>
                        ))}
                    </div>
                }
                code={`import { motion } from 'motion/react';

function FadeInUp() {
  return (
    <div className="flex gap-4">
      {[1, 2, 3, 4].map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl"
        >
          Item {item}
        </motion.div>
      ))}
    </div>
  );
}`}
            />

            {/* Scale and Rotate */}
            <ComponentShowcase
                title="Scale & Rotate Animation"
                description="Interactive hover effects with scale and rotation"
                preview={
                    <div className="flex flex-wrap gap-6">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-white cursor-pointer shadow-lg"
                        >
                            <Heart className="w-12 h-12" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white cursor-pointer shadow-lg"
                        >
                            <Bell className="w-12 h-12" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white cursor-pointer shadow-lg"
                        >
                            <ShoppingCart className="w-12 h-12" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -8 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white cursor-pointer shadow-lg"
                        >
                            <Star className="w-12 h-12 text-white" />
                        </motion.div>
                    </div>
                }
                code={`import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

function ScaleRotate() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl cursor-pointer"
    >
      <Heart className="w-12 h-12" />
    </motion.div>
  );
}`}
            />

            {/* Spring Animation */}
            <ComponentShowcase
                title="Spring Physics Animation"
                description="Natural spring-based animations"
                preview={
                    <div className="space-y-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                        >
                            Toggle Menu
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    className="overflow-hidden"
                                >
                                    <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                                        {['Profile', 'Settings', 'Billing', 'Logout'].map((item, index) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="px-4 py-2 hover:bg-slate-100 rounded-lg cursor-pointer"
                                            >
                                                {item}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}</AnimatePresence>
                    </div>
                }
                code={`import { motion } from 'motion/react';
import { useState } from 'react';

function SpringAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Menu</button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {/* Menu content */}
        </motion.div>
      )}
    </div>
  );
}`}
            />

            {/* Stagger Children */}
            <ComponentShowcase
                title="Stagger Children Animation"
                description="Sequentially animate child elements"
                preview={
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                        className="grid grid-cols-3 gap-4"
                    >
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <motion.div
                                key={item}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                className="h-24 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>
                }
                code={`import { motion } from 'motion/react';

function StaggerChildren() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      className="grid grid-cols-3 gap-4"
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <motion.div
          key={item}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          className="h-24 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}`}
            />

            {/* Counter Animation */}
            <ComponentShowcase
                title="Animated Counter"
                description="Smooth number transitions"
                preview={
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <button
                                onClick={() => setCount(count + 1)}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                            >
                                Increment
                            </button>
                            <button
                                onClick={() => setCount(Math.max(0, count - 1))}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Decrement
                            </button>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
                            <motion.div
                                key={count}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl text-indigo-600"
                            >
                                {count}
                            </motion.div>
                        </div>
                    </div>
                }
                code={`import { motion } from 'motion/react';
import { useState } from 'react';

function AnimatedCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <motion.div
        key={count}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl"
      >
        {count}
      </motion.div>
    </div>
  );
}`}
            />

            {/* Drag Animation */}
            <ComponentShowcase
                title="Drag & Drop Animation"
                description="Draggable elements with constraints"
                preview={
                    <div className="h-64 bg-slate-100 rounded-xl p-4 relative overflow-hidden">
                        <motion.div
                            drag
                            dragConstraints={{ left: 0, right: 200, top: 0, bottom: 150 }}
                            dragElastic={0.1}
                            className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white cursor-grab active:cursor-grabbing shadow-lg"
                        >
                            <Zap className="w-8 h-8 text-white" />
                        </motion.div>
                    </div>
                }
                code={`import { motion } from 'motion/react';

function DragAnimation() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 200, top: 0, bottom: 150 }}
      dragElastic={0.1}
      className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl cursor-grab"
    >
      Drag me
    </motion.div>
  );
}`}
            />

            {/* Path Animation */}
            <ComponentShowcase
                title="SVG Path Animation"
                description="Animate SVG path drawing"
                preview={
                    <div className="bg-white border border-slate-200 rounded-xl p-8">
                        <motion.svg width="200" height="200" viewBox="0 0 200 200">
                            <motion.circle
                                cx="100"
                                cy="100"
                                r="80"
                                stroke="#6366f1"
                                strokeWidth="4"
                                fill="transparent"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                            <motion.path
                                d="M 50 100 L 90 140 L 150 60"
                                stroke="#10b981"
                                strokeWidth="4"
                                fill="transparent"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                            />
                        </motion.svg>
                    </div>
                }
                code={`import { motion } from 'motion/react';

function PathAnimation() {
  return (
    <motion.svg width="200" height="200" viewBox="0 0 200 200">
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#6366f1"
        strokeWidth="4"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}`}
            />
        </div>
    );
}
