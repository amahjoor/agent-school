'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DemoPage() {
  const [userInput, setUserInput] = useState('');
  const [demoStarted, setDemoStarted] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'input' | 'run1' | 'run2' | 'comparison'>('input');

  const handleStartDemo = () => {
    if (userInput.trim()) {
      setDemoStarted(true);
      setCurrentPhase('run1');
    }
  };

  const exampleQueries = [
    "Find where operations managers in manufacturing companies hang out",
    "Find where sales directors in healthcare companies hang out",
    "Find where CTOs in fintech startups hang out"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {currentPhase === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Industry Research & People Discovery
                </h1>
                <p className="text-xl text-gray-600">
                  Describe what you're looking for in natural language
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <label htmlFor="query" className="block text-lg font-semibold text-gray-900 mb-4">
                  What are you trying to find?
                </label>

                <textarea
                  id="query"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="e.g., Find where operations managers in manufacturing companies hang out - databases, forums, associations, LinkedIn groups"
                  className="w-full h-32 px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  autoFocus
                />

                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-3">Try these examples:</p>
                  <div className="space-y-2">
                    {exampleQueries.map((query, index) => (
                      <button
                        key={index}
                        onClick={() => setUserInput(query)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {query}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleStartDemo}
                  disabled={!userInput.trim()}
                  className="mt-8 w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
                >
                  Start Demo →
                </button>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>This is a simulation demonstrating Agent School's "learn once, run repeatedly" concept.</p>
              </div>
            </motion.div>
          )}

          {currentPhase === 'run1' && (
            <motion.div
              key="run1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  RUN 1: The Learning
                </h2>
                <p className="text-xl text-gray-600">
                  AI explores and creates a reusable workflow
                </p>
              </div>

              {/* Split screen simulation will go here */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 min-h-[600px]">
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400 text-lg">
                    Run 1 simulation coming soon...
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
