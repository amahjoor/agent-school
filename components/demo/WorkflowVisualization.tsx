'use client';

import { motion } from 'framer-motion';
import { WorkflowStep } from '@/lib/types/demo';

interface WorkflowVisualizationProps {
  steps: WorkflowStep[];
}

export default function WorkflowVisualization({ steps }: WorkflowVisualizationProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-semibold mb-4"
        >
          <span>✓</span>
          <span>Workflow Recipe Created</span>
        </motion.div>
        <p className="text-gray-600">
          AI has learned your research methodology. This workflow can now be reused.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              {step.step}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="absolute left-8 w-0.5 h-4 bg-blue-300 origin-top"
                style={{ top: '100%', marginTop: '0.5rem' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
