'use client';

import { motion } from 'framer-motion';

export default function CostComparison() {
  const industries = 10;
  const competitorCostPerRun = 2.0;
  const agentSchoolLearningCost = 2.0;
  const agentSchoolExecutionCost = 0.2;

  const competitorTotal = industries * competitorCostPerRun;
  const agentSchoolTotal = agentSchoolLearningCost + ((industries - 1) * agentSchoolExecutionCost);
  const savings = competitorTotal - agentSchoolTotal;
  const savingsPercent = Math.round((savings / competitorTotal) * 100);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-900 mb-4"
        >
          The Agent School Difference
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-gray-600"
        >
          Learn once, run repeatedly vs. re-reason every time
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Competitors */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl border-2 border-red-200 p-8"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold mb-4">
              <span>❌</span>
              <span>Competitors</span>
            </div>
            <p className="text-gray-600 text-sm">Apollo.io, Clay.com, ZoomInfo</p>
          </div>

          <div className="space-y-3 mb-6">
            {Array.from({ length: industries }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (idx * 0.05) }}
                className="flex items-center justify-between bg-red-50 rounded-lg p-3 border border-red-200"
              >
                <span className="text-sm text-gray-700">Run {idx + 1} (Industry {idx + 1})</span>
                <span className="font-semibold text-red-600">${competitorCostPerRun.toFixed(2)}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white text-center"
          >
            <p className="text-sm uppercase tracking-wide mb-2">Total Cost</p>
            <p className="text-5xl font-bold">${competitorTotal.toFixed(2)}</p>
            <p className="text-sm mt-2 opacity-90">$2 × {industries} searches</p>
          </motion.div>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Re-reasons with expensive AI every single time</p>
          </div>
        </motion.div>

        {/* Agent School */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-4">
              <span>✓</span>
              <span>Agent School</span>
            </div>
            <p className="text-gray-600 text-sm">Learn once, run repeatedly</p>
          </div>

          <div className="space-y-3 mb-6">
            {/* First run - learning */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-between bg-orange-50 rounded-lg p-3 border-2 border-orange-300"
            >
              <div>
                <span className="text-sm text-gray-700 font-semibold">Run 1 (Learning)</span>
                <p className="text-xs text-gray-500">AI explores & creates workflow</p>
              </div>
              <span className="font-semibold text-orange-600">${agentSchoolLearningCost.toFixed(2)}</span>
            </motion.div>

            {/* Subsequent runs - execution */}
            {Array.from({ length: industries - 1 }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + (idx * 0.05) }}
                className="flex items-center justify-between bg-green-50 rounded-lg p-3 border border-green-200"
              >
                <span className="text-sm text-gray-700">Run {idx + 2} (Execution)</span>
                <span className="font-semibold text-green-600">${agentSchoolExecutionCost.toFixed(2)}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white text-center"
          >
            <p className="text-sm uppercase tracking-wide mb-2">Total Cost</p>
            <p className="text-5xl font-bold">${agentSchoolTotal.toFixed(2)}</p>
            <p className="text-sm mt-2 opacity-90">$2 + ($0.20 × {industries - 1})</p>
          </motion.div>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Learns once, then executes deterministically</p>
          </div>
        </motion.div>
      </div>

      {/* Savings Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.4, type: 'spring' }}
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-12 text-white text-center shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
          className="mb-4"
        >
          <p className="text-2xl font-semibold mb-3">Your Savings</p>
          <p className="text-7xl font-bold mb-2">${savings.toFixed(2)}</p>
          <p className="text-3xl font-semibold">({savingsPercent}% cost reduction)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8 pt-8 border-t border-white/30"
        >
          <p className="text-xl mb-2">
            <strong>Agent School learns once, runs repeatedly.</strong>
          </p>
          <p className="text-lg opacity-90">
            Competitors re-reason every time.
          </p>
        </motion.div>
      </motion.div>

      {/* Feature Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0 }}
        className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
      >
        <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            What Makes Agent School Different?
          </h3>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Learns Once</h4>
              <p className="text-gray-600 text-sm">
                Creates a reusable workflow methodology that can be applied to any similar task
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Executes Deterministically</h4>
              <p className="text-gray-600 text-sm">
                Runs the learned workflow without expensive re-reasoning - 10x cheaper, 3x faster
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Self-Healing</h4>
              <p className="text-gray-600 text-sm">
                When systems change, AI detects failures and re-learns only what broke
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
