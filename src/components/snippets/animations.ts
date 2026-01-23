export const animationsSnippets = {
  fadeIn: `import { motion } from 'motion/react';

function FadeInUp() {
  return (
    <div className="flex gap-4">
      {[1, 2, 3, 4].map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="w-40 h-40 bg-linear-to-br from-indigo-500 to-purple-500 rounded-xl"
        >
          Item {item}
        </motion.div>
      ))}
    </div>
  );
}`,
  scale: `import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

function ScaleRotate() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="w-32 h-32 bg-linear-to-br from-pink-500 to-rose-500 rounded-2xl cursor-pointer"
    >
      <Heart className="w-12 h-12" />
    </motion.div>
  );
}`,
  spring: `import { motion } from 'motion/react';
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
}`,
  staggered: `import { motion } from 'motion/react';

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
          className="w-20 h-20 bg-linear-to-br from-violet-500 to-purple-500 rounded-xl"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}`,
  counter: `import { motion } from 'motion/react';
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
}`,
  dragDrop: `import { motion } from 'motion/react';

function DragAnimation() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 200, top: 0, bottom: 150 }}
      dragElastic={0.1}
      className="w-24 h-24 bg-linear-to-br from-orange-500 to-red-500 rounded-2xl cursor-grab"
    >
      Drag me
    </motion.div>
  );
}`,
  path: `import { motion } from 'motion/react';

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
}`,
};
