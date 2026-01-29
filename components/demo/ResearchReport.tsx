'use client';

import { motion } from 'framer-motion';
import { ResearchReport } from '@/lib/types/demo';

interface ResearchReportProps {
  report: ResearchReport;
  runNumber: 1 | 2;
}

export default function ResearchReport({ report, runNumber }: ResearchReportProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
    >
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {report.industry} {report.persona} - Where to Find Them
        </h2>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Time:</span>
            <span className="font-semibold text-gray-900">{report.timeElapsed} seconds</span>
            {runNumber === 2 && (
              <span className="text-green-600 text-xs">(vs 2-4 hours manual)</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Cost:</span>
            <span className={`font-semibold ${runNumber === 1 ? 'text-orange-600' : 'text-green-600'}`}>
              ${report.cost.toFixed(2)}
            </span>
            {runNumber === 1 && (
              <span className="text-xs text-gray-500">(Heavy AI reasoning + exploration)</span>
            )}
            {runNumber === 2 && (
              <span className="text-xs text-gray-500">(Deterministic execution, minimal AI)</span>
            )}
          </div>
        </div>
      </div>

      {/* Primary Sources */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          Primary Sources
        </h3>
        <div className="space-y-3">
          {report.primarySources.map((source, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200"
            >
              <h4 className="font-semibold text-gray-900 mb-1">{source.name}</h4>
              <p className="text-sm text-gray-700 mb-1">{source.description}</p>
              {source.details && (
                <p className="text-xs text-gray-600 italic">{source.details}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Secondary Sources */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">📌</span>
          Secondary Sources
        </h3>
        <div className="space-y-3">
          {report.secondarySources.map((source, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (report.primarySources.length + idx) * 0.1 }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200"
            >
              <h4 className="font-semibold text-gray-900 mb-1">{source.name}</h4>
              <p className="text-sm text-gray-700">{source.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommended Approach */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-300"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-2xl">💡</span>
          Recommended Approach
        </h3>
        <p className="text-gray-800 leading-relaxed">{report.recommendedApproach}</p>
      </motion.div>
    </motion.div>
  );
}
