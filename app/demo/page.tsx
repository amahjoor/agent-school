'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIThinkingPanel from '@/components/demo/AIThinkingPanel';
import AIExploringPanel from '@/components/demo/AIExploringPanel';
import WorkflowVisualization from '@/components/demo/WorkflowVisualization';
import ResearchReport from '@/components/demo/ResearchReport';
import CostComparison from '@/components/demo/CostComparison';
import BackButton from '@/components/BackButton';
import { DemoPhase } from '@/lib/types/demo';
import { analytics } from '@/lib/analytics';
import {
  run1ThinkingBubbles,
  run1ExplorationSteps,
  workflowSteps,
  run1Report,
  run2Report
} from '@/lib/data/simulationData';

export default function DemoPage() {
  const [userInput, setUserInput] = useState('');
  const [currentPhase, setCurrentPhase] = useState<DemoPhase>('input');
  const [elapsedTime, setElapsedTime] = useState(0);

  const exampleQueries = [
    "Find where operations managers in manufacturing companies hang out",
    "Find where sales directors in healthcare companies hang out",
    "Find where CTOs in fintech startups hang out"
  ];

  // Timer for simulation
  useEffect(() => {
    if (currentPhase === 'run1-exploring') {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        setElapsedTime(elapsed);

        // Phase transitions based on timing
        if (elapsed >= 27000 && elapsed < 27100) {
          // After exploration, show workflow (27-37 seconds)
          setCurrentPhase('run1-workflow');
        }
      }, 100);

      return () => clearInterval(interval);
    } else if (currentPhase === 'run1-workflow') {
      // Show workflow for 10 seconds, then output
      const timer = setTimeout(() => {
        setCurrentPhase('run1-output');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [currentPhase]);

  const handleStartDemo = () => {
    if (userInput.trim()) {
      analytics.demoStarted(userInput);
      setCurrentPhase('run1-exploring');
      setElapsedTime(0);
    }
  };

  const handleContinueToRun2 = () => {
    analytics.run1Completed(elapsedTime);
    analytics.run2Started();
    setCurrentPhase('run2-input');
  };

  const handleStartRun2 = () => {
    setCurrentPhase('run2-executing');
    setTimeout(() => {
      analytics.run2Completed();
      setCurrentPhase('run2-output');
    }, 12000);
  };

  const handleViewComparison = () => {
    analytics.comparisonViewed();
    setCurrentPhase('comparison');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BackButton />
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {/* Input Phase */}
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
                        onClick={() => {
                          analytics.exampleQuerySelected(query);
                          setUserInput(query);
                        }}
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

          {/* RUN 1: Exploring Phase */}
          {currentPhase === 'run1-exploring' && (
            <motion.div
              key="run1-exploring"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  RUN 1: The Learning
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  AI explores and creates a reusable workflow
                </p>
                <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
                  <span className="text-sm text-gray-600">Time elapsed:</span>
                  <span className="text-lg font-bold text-blue-600">{Math.floor(elapsedTime / 1000)}s</span>
                  <span className="text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-600">Cost:</span>
                  <span className="text-lg font-bold text-orange-600">$2.00</span>
                </div>
              </div>

              {/* Split Screen */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <AIThinkingPanel bubbles={run1ThinkingBubbles} currentTime={elapsedTime} />
                <AIExploringPanel steps={run1ExplorationSteps} currentTime={elapsedTime} />
              </div>
            </motion.div>
          )}

          {/* RUN 1: Workflow Phase */}
          {currentPhase === 'run1-workflow' && (
            <motion.div
              key="run1-workflow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Creating Reusable Workflow
                </h2>
                <p className="text-xl text-gray-600">
                  AI has discovered the pattern and is building a workflow recipe
                </p>
              </div>

              <WorkflowVisualization steps={workflowSteps} />

              <div className="text-center mt-8">
                <button
                  onClick={() => setCurrentPhase('run1-output')}
                  className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  View Research Report →
                </button>
              </div>
            </motion.div>
          )}

          {/* RUN 1: Output Phase */}
          {currentPhase === 'run1-output' && (
            <motion.div
              key="run1-output"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  RUN 1 Complete: Research Report Generated
                </h2>
                <p className="text-xl text-gray-600">
                  45 seconds vs 2-4 hours manual research
                </p>
              </div>

              <ResearchReport report={run1Report} runNumber={1} />

              <div className="text-center mt-8">
                <button
                  onClick={handleContinueToRun2}
                  className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Watch RUN 2: The Execution →
                </button>
              </div>
            </motion.div>
          )}

          {/* RUN 2: Input Phase */}
          {currentPhase === 'run2-input' && (
            <motion.div
              key="run2-input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  RUN 2: The Execution
                </h2>
                <p className="text-2xl text-gray-600 mb-8">
                  Now watch the <span className="font-semibold text-green-600">SAME workflow</span> run for a different industry
                  <br />
                  <span className="text-lg">— no re-reasoning, just execution</span>
                </p>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-300 mb-8">
                  <p className="text-xl text-gray-800 mb-4">
                    <strong>Different industry:</strong> Real Estate Operations Managers
                  </p>
                  <p className="text-lg text-gray-700">
                    The AI will run the exact same 5-step workflow it just learned, but with "Real Estate" substituted for "Manufacturing"
                  </p>
                </div>

                <button
                  onClick={handleStartRun2}
                  className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Run Workflow on Real Estate →
                </button>
              </div>
            </motion.div>
          )}

          {/* RUN 2: Executing Phase */}
          {currentPhase === 'run2-executing' && (
            <motion.div
              key="run2-executing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  RUN 2: Fast Execution
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Deterministic workflow execution - no AI re-reasoning
                </p>
                <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
                  <span className="text-sm text-gray-600">Cost:</span>
                  <span className="text-2xl font-bold text-green-600">$0.20</span>
                  <span className="text-sm text-gray-400 ml-2">(10x cheaper!)</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-12">
                <div className="space-y-6">
                  {workflowSteps.map((step, idx) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.4 }}
                      className="flex items-center gap-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.4, type: 'spring' }}
                        className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                      >
                        ✓
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-600">Executing for Real Estate...</p>
                      </div>
                      <span className="text-sm text-green-600 font-semibold">{(idx + 1) * 2}s</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* RUN 2: Output Phase */}
          {currentPhase === 'run2-output' && (
            <motion.div
              key="run2-output"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  RUN 2 Complete: 12 Seconds
                </h2>
                <p className="text-xl text-green-600 font-semibold">
                  Same quality research, 73% faster, 90% cheaper
                </p>
              </div>

              <ResearchReport report={run2Report} runNumber={2} />

              <div className="text-center mt-8">
                <button
                  onClick={handleViewComparison}
                  className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
                >
                  View Cost Comparison →
                </button>
              </div>
            </motion.div>
          )}

          {/* Comparison Phase */}
          {currentPhase === 'comparison' && (
            <motion.div
              key="comparison"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CostComparison />

              <div className="text-center mt-12">
                <button
                  onClick={() => {
                    analytics.ctaViewed();
                    setCurrentPhase('cta');
                  }}
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  See Agent School Working on YOUR Workflows →
                </button>
              </div>
            </motion.div>
          )}

          {/* CTA Phase */}
          {currentPhase === 'cta' && (
            <motion.div
              key="cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold text-gray-900 mb-6"
                >
                  Ready to Transform Your Workflows?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl text-gray-600 mb-8"
                >
                  See Agent School working on <span className="font-semibold text-blue-600">your</span> repetitive workflows
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">What you'll get:</h3>

                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Custom Workflow Demo</h4>
                        <p className="text-sm text-gray-600">See Agent School working on your actual workflows</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Cost & Time Analysis</h4>
                        <p className="text-sm text-gray-600">Calculate your specific savings potential</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">Implementation Roadmap</h4>
                        <p className="text-sm text-gray-600">Understand exactly how to get started</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Book a Call</h3>

                    <form className="space-y-4" onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      analytics.ctaClicked({
                        name: formData.get('name') as string,
                        email: formData.get('email') as string,
                        workflow: formData.get('workflow') as string,
                      });
                      window.open('https://calendly.com/agent-school/demo', '_blank');
                    }}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="you@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="workflow" className="block text-sm font-medium text-gray-700 mb-1">
                          What workflow do you want to automate?
                        </label>
                        <textarea
                          id="workflow"
                          name="workflow"
                          required
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                          placeholder="e.g., Research industry contacts, process invoices, etc."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                      >
                        Book Your Demo Call →
                      </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                      30-minute call • No commitment required
                    </p>
                  </div>
                </div>

                <div className="text-center pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Or, want to try another demo first?
                  </p>
                  <button
                    onClick={() => {
                      analytics.demoRestarted();
                      setCurrentPhase('input');
                      setUserInput('');
                      setElapsedTime(0);
                    }}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    ← Start Over
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
