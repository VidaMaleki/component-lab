import { ComponentShowcase } from '../ComponentShowcase';
import { Heart, Star, ThumbsUp, Bell, Bookmark, Send, Volume2, VolumeX, Eye, EyeOff, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function MicroInteractionsSection() {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [rating, setRating] = useState(0);
    const [volume, setVolume] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [copied, setCopied] = useState(false);
    const [thumbsUp, setThumbsUp] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Subtle Hover Effects & Micro-interactions</h1>
                <p className="text-slate-600">
                    Small, intentional animations and feedback mechanisms that make interfaces feel responsive and engaging.
                </p>
            </div>

            {/* Like Button */}
            <ComponentShowcase
                title="Animated Like Button"
                description="Heart animation with scale and color transition"
                preview={
                    <div className="flex gap-4">
                        <motion.button
                            onClick={() => setLiked(!liked)}
                            whileTap={{ scale: 0.9 }}
                            className={`p-4 rounded-full transition-colors ${liked ? 'bg-pink-100' : 'bg-slate-100 hover:bg-slate-200'
                                }`}
                        >
                            <motion.div
                                animate={{
                                    scale: liked ? [1, 1.2, 1] : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Heart
                                    className={`w-6 h-6 transition-all ${liked ? 'fill-pink-500 text-pink-500' : 'text-slate-600'
                                        }`}
                                />
                            </motion.div>
                        </motion.button>

                        <motion.button
                            onClick={() => setBookmarked(!bookmarked)}
                            whileTap={{ scale: 0.9 }}
                            className={`p-4 rounded-full transition-colors ${bookmarked ? 'bg-amber-100' : 'bg-slate-100 hover:bg-slate-200'
                                }`}
                        >
                            <motion.div
                                animate={{
                                    scale: bookmarked ? [1, 1.2, 1] : 1,
                                    rotate: bookmarked ? [0, -10, 10, 0] : 0,
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <Bookmark
                                    className={`w-6 h-6 transition-all ${bookmarked ? 'fill-amber-500 text-amber-500' : 'text-slate-600'
                                        }`}
                                />
                            </motion.div>
                        </motion.button>

                        <motion.button
                            onClick={() => setThumbsUp(!thumbsUp)}
                            whileTap={{ scale: 0.9 }}
                            className={`p-4 rounded-full transition-colors ${thumbsUp ? 'bg-blue-100' : 'bg-slate-100 hover:bg-slate-200'
                                }`}
                        >
                            <motion.div
                                animate={{
                                    scale: thumbsUp ? [1, 1.3, 1] : 1,
                                    rotate: thumbsUp ? [0, 20, 0] : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <ThumbsUp
                                    className={`w-6 h-6 transition-all ${thumbsUp ? 'fill-blue-500 text-blue-500' : 'text-slate-600'
                                        }`}
                                />
                            </motion.div>
                        </motion.button>
                    </div>
                }
                code={`import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <motion.button
      onClick={() => setLiked(!liked)}
      whileTap={{ scale: 0.9 }}
      className={\`p-4 rounded-full \${liked ? 'bg-pink-100' : 'bg-slate-100'}\`}
    >
      <motion.div
        animate={{ scale: liked ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Heart className={\`w-6 h-6 \${liked ? 'fill-pink-500 text-pink-500' : 'text-slate-600'}\`} />
      </motion.div>
    </motion.button>
  );
}`}
            />

            {/* Star Rating */}
            <ComponentShowcase
                title="Interactive Star Rating"
                description="Hover and click animations for rating"
                preview={
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <motion.button
                                key={star}
                                onHoverStart={() => setRating(star)}
                                onClick={() => setRating(star)}
                                whileHover={{ scale: 1.2, rotate: -15 }}
                                whileTap={{ scale: 0.9 }}
                                className="focus:outline-none"
                            >
                                <Star
                                    className={`w-8 h-8 transition-all ${star <= rating
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-slate-300 hover:text-slate-400'
                                        }`}
                                />
                            </motion.button>
                        ))}
                        <span className="ml-2 text-slate-600">({rating}/5)</span>
                    </div>
                }
                code={`import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          onHoverStart={() => setRating(star)}
          onClick={() => setRating(star)}
          whileHover={{ scale: 1.2, rotate: -15 }}
          whileTap={{ scale: 0.9 }}
        >
          <Star
            className={\`w-8 h-8 \${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
            }\`}
          />
        </motion.button>
      ))}
    </div>
  );
}`}
            />

            {/* Button Ripple Effect */}
            <ComponentShowcase
                title="Ripple Effect Buttons"
                description="Material Design inspired ripple animation"
                preview={
                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-6 py-3 bg-indigo-600 text-white rounded-lg overflow-hidden group"
                        >
                            <span className="relative z-10">Primary Button</span>
                            <motion.span
                                className="absolute inset-0 bg-white"
                                initial={{ scale: 0, opacity: 0.5 }}
                                whileHover={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg"
                        >
                            Gradient Button
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, borderColor: '#6366f1' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 rounded-lg transition-colors"
                        >
                            Outline Button
                        </motion.button>
                    </div>
                }
                code={`import { motion } from 'motion/react';

function RippleButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 bg-indigo-600 text-white rounded-lg overflow-hidden"
    >
      <span className="relative z-10">Primary Button</span>
      <motion.span
        className="absolute inset-0 bg-white"
        initial={{ scale: 0, opacity: 0.5 }}
        whileHover={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
}`}
            />

            {/* Toggle Switches */}
            <ComponentShowcase
                title="Animated Toggles"
                description="Smooth toggle switches with icons"
                preview={
                    <div className="flex flex-wrap gap-6">
                        <button
                            onClick={() => setVolume(!volume)}
                            className={`relative w-16 h-8 rounded-full transition-colors ${volume ? 'bg-indigo-600' : 'bg-slate-300'
                                }`}
                        >
                            <motion.div
                                animate={{ x: volume ? 32 : 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow"
                            >
                                {volume ? (
                                    <Volume2 className="w-3 h-3 text-indigo-600" />
                                ) : (
                                    <VolumeX className="w-3 h-3 text-slate-600" />
                                )}
                            </motion.div>
                        </button>

                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className={`relative w-16 h-8 rounded-full transition-colors ${showPassword ? 'bg-green-600' : 'bg-slate-300'
                                }`}
                        >
                            <motion.div
                                animate={{ x: showPassword ? 32 : 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow"
                            >
                                {showPassword ? (
                                    <Eye className="w-3 h-3 text-green-600" />
                                ) : (
                                    <EyeOff className="w-3 h-3 text-slate-600" />
                                )}
                            </motion.div>
                        </button>
                    </div>
                }
                code={`import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

function AnimatedToggle() {
  const [volume, setVolume] = useState(true);

  return (
    <button
      onClick={() => setVolume(!volume)}
      className={\`relative w-16 h-8 rounded-full \${volume ? 'bg-indigo-600' : 'bg-slate-300'}\`}
    >
      <motion.div
        animate={{ x: volume ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow"
      >
        {volume ? <Volume2 /> : <VolumeX />}
      </motion.div>
    </button>
  );
}`}
            />

            {/* Copy Button */}
            <ComponentShowcase
                title="Copy to Clipboard"
                description="Visual feedback for copy action"
                preview={
                    <div className="flex items-center gap-4">
                        <div className="flex-1 max-w-md bg-slate-100 rounded-lg px-4 py-3 font-mono text-sm">
                            npm install motion
                        </div>
                        <motion.button
                            onClick={handleCopy}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-3 rounded-lg transition-colors ${copied ? 'bg-green-100' : 'bg-slate-100 hover:bg-slate-200'
                                }`}
                        >
                            <motion.div
                                animate={{
                                    scale: copied ? [1, 1.2, 1] : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {copied ? (
                                    <Check className="w-5 h-5 text-green-600" />
                                ) : (
                                    <Copy className="w-5 h-5 text-slate-600" />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>
                }
                code={`import { Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={\`p-3 rounded-lg \${copied ? 'bg-green-100' : 'bg-slate-100'}\`}
    >
      {copied ? <Check className="text-green-600" /> : <Copy />}
    </motion.button>
  );
}`}
            />

            {/* Notification Bell */}
            <ComponentShowcase
                title="Notification Bell"
                description="Shake animation on new notification"
                preview={
                    <div className="flex gap-4">
                        <motion.button
                            animate={{
                                rotate: [0, -10, 10, -10, 10, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                            }}
                            className="relative p-4 bg-slate-100 hover:bg-slate-200 rounded-full"
                        >
                            <Bell className="w-6 h-6 text-slate-600" />
                            <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative p-4 bg-indigo-100 hover:bg-indigo-200 rounded-full group"
                        >
                            <Send className="w-6 h-6 text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.button>
                    </div>
                }
                code={`import { Bell } from 'lucide-react';
import { motion } from 'motion/react';

function NotificationBell() {
  return (
    <motion.button
      animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      className="relative p-4 bg-slate-100 rounded-full"
    >
      <Bell className="w-6 h-6" />
      <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full" />
    </motion.button>
  );
}`}
            />

            {/* Glow Effect */}
            <ComponentShowcase
                title="Glow on Hover"
                description="Subtle glow effect for premium feel"
                preview={
                    <div className="flex flex-wrap gap-4">
                        <motion.div
                            whileHover={{
                                boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
                            }}
                            className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl cursor-pointer"
                        >
                            Hover for Glow
                        </motion.div>

                        <motion.div
                            whileHover={{
                                boxShadow: '0 0 30px rgba(236, 72, 153, 0.6)',
                            }}
                            className="px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl cursor-pointer"
                        >
                            Pink Glow
                        </motion.div>

                        <motion.div
                            whileHover={{
                                boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)',
                            }}
                            className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl cursor-pointer"
                        >
                            Green Glow
                        </motion.div>
                    </div>
                }
                code={`import { motion } from 'motion/react';

function GlowEffect() {
  return (
    <motion.div
      whileHover={{
        boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
      }}
      className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl cursor-pointer"
    >
      Hover for Glow
    </motion.div>
  );
}`}
            />
        </div>
    );
}
