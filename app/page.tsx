'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showMobileFallback, setShowMobileFallback] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    setMounted(true);
    if (window.innerWidth < 1024) {
      setShowMobileFallback(true);
    }
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  if (showMobileFallback) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Desktop Experience Required
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            This demo works best on desktop for the full interactive experience.
          </p>
          <p className="text-gray-500 mb-8">
            Visit this link on your computer to see the demo.
          </p>
          <a
            href="mailto:?subject=Agent School Demo&body=Check out this demo: https://agentschool.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Email Me the Link
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8">
              AI That Learns Once,
              <br />
              Runs Repeatedly
            </h1>

            {/* Cost Comparison */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Competitors */}
                  <div className="text-left">
                    <div className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                      Competitors (Apollo, Clay, ZoomInfo)
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      $2+ per search
                    </div>
                    <div className="text-gray-600">
                      Every. Single. Time.
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      10 searches = <span className="font-semibold">$20+</span>
                    </div>
                  </div>

                  {/* Agent School */}
                  <div className="text-left border-l-4 border-green-500 pl-8">
                    <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                      Agent School
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      $2 first, $0.20 after
                    </div>
                    <div className="text-gray-600">
                      Learn once, run forever
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      10 searches = <span className="font-semibold">$3.80</span>
                      <span className="text-green-600 font-semibold ml-2">(81% savings)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-12">
              Watch how AI learns your research methodology once,
              <br />
              then executes it deterministically at 10x lower cost.
            </p>

            <Link
              href="/demo"
              className="inline-block px-10 py-5 bg-blue-600 text-white text-xl font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Try Demo →
            </Link>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Learns Once
              </h3>
              <p className="text-gray-600">
                AI explores and creates a reusable workflow methodology. $2 first run.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Runs Repeatedly
              </h3>
              <p className="text-gray-600">
                Deterministic execution without re-reasoning. $0.20 every run after.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Self-Healing
              </h3>
              <p className="text-gray-600">
                When systems change, AI re-learns only what broke and keeps running.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
