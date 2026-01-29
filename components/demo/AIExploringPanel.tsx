'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExplorationStep } from '@/lib/types/demo';

interface AIExploringPanelProps {
  steps: ExplorationStep[];
  currentTime: number;
}

export default function AIExploringPanel({ steps, currentTime }: AIExploringPanelProps) {
  const currentStep = steps.filter(s => s.timestamp <= currentTime).pop();

  const getIconForType = (type: string) => {
    switch (type) {
      case 'linkedin': return '💼';
      case 'google': return '🔍';
      case 'association': return '🏢';
      case 'database': return '📊';
      case 'forum': return '💬';
      default: return '🌐';
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-200">
      <div className="flex items-center gap-2 mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-2xl"
        >
          🖱️
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-900">AI Exploring</h3>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {currentStep && (
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-lg shadow-lg border border-purple-200 overflow-hidden"
            >
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600">
                  {currentStep.url}
                </div>
              </div>

              {/* Browser Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{getIconForType(currentStep.type)}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{currentStep.title}</h4>
                    <p className="text-sm text-gray-600">{currentStep.description}</p>
                  </div>
                </div>

                {currentStep.findings && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2 mt-4"
                  >
                    {currentStep.findings.map((finding, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.2) }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span className="text-gray-700">{finding}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>{steps.filter(s => s.timestamp <= currentTime).length} / {steps.length} sources</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{
                width: `${(steps.filter(s => s.timestamp <= currentTime).length / steps.length) * 100}%`
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
