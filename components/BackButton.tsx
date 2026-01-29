'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-6 left-6 z-50"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 hover:bg-gray-50"
      >
        <span>←</span>
        <span className="font-medium">Back to Home</span>
      </Link>
    </motion.div>
  );
}
