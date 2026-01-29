'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ThinkingBubble } from '@/lib/types/demo';

interface AIThinkingPanelProps {
  bubbles: ThinkingBubble[];
  currentTime: number;
}

export default function AIThinkingPanel({ bubbles, currentTime }: AIThinkingPanelProps) {
  const visibleBubbles = bubbles.filter(b => b.timestamp <= currentTime);

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
        <h3 className="text-lg font-semibold text-gray-900">AI Thinking</h3>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {visibleBubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-4 shadow-md border border-blue-100"
            >
              <p className="text-gray-800 text-sm leading-relaxed">{bubble.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
