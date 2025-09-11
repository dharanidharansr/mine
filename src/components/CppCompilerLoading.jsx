import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CppCompilerLoading({ onLoadingComplete }) {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Python code to simulate typing
  const codeLines = [
    "import numpy as np",
    "import tensorflow as tf",
    "from portfolio import skills, projects",
    "",
    "def initialize_portfolio():",
    '    print("Loading portfolio...")',
    "    # Initialize ML models and components",
    "    model = tf.keras.Sequential()",
    "    skills.load_all()",
    "    projects.compile()",
    '    return "Portfolio ready for deployment!"',
    "",
    "initialize_portfolio()",
  ];

  // Current line being typed
  const currentLine = codeLines[textIndex] || "";
  // Text displayed so far
  const displayText = codeLines
    .slice(0, textIndex)
    .concat(currentLine.substring(0, charIndex));

  useEffect(() => {
    // Complete loading after all text is typed
    if (textIndex >= codeLines.length) {
      const finalTimer = setTimeout(() => {
        setLoading(false);
        onLoadingComplete();
      }, 800);
      return () => clearTimeout(finalTimer);
    }

    // Type current character
    if (charIndex < currentLine.length) {
      const charTimer = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 1 + Math.random() * 5); // Slightly randomized typing speed
      return () => clearTimeout(charTimer);
    }

    // Move to next line
    if (textIndex < codeLines.length) {
      const lineTimer = setTimeout(() => {
        setTextIndex(textIndex + 1);
        setCharIndex(0);
      }, 200);
      return () => clearTimeout(lineTimer);
    }
  }, [textIndex, charIndex, currentLine.length, codeLines.length, onLoadingComplete]);

  if (!loading) {
    return null;
  }

  return (
    <div className="w-full h-screen bg-white dark:bg-black flex flex-col items-center justify-center p-4 transition-colors duration-300">
      {/* Welcome text */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Welcome to Dharanidharan's Portfolio
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          Initializing development environment...
        </p>
      </motion.div>

      {/* Compiler window */}
      <motion.div
        className="w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl overflow-hidden backdrop-blur-sm"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Compiler header */}
        <div className="bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-neutral-700 dark:text-neutral-300 font-mono text-sm font-medium">
              portfolio.py
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded">
              Python
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>

        {/* Code editor */}
        <div className="bg-white dark:bg-neutral-900 p-6 font-mono text-sm h-80 overflow-hidden">
          <div className="h-full overflow-y-auto">
            {displayText.map((line, index) => (
              <div key={index} className="flex hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded transition-colors">
                <div className="text-neutral-400 dark:text-neutral-500 w-10 flex-shrink-0 text-right pr-3 select-none">
                  {index + 1}
                </div>
                <div className="text-neutral-800 dark:text-neutral-200 whitespace-pre flex-1">
                  <span className={
                    line.includes('import') ? 'text-purple-600 dark:text-purple-400' :
                    line.includes('def ') || line.includes('if __name__') ? 'text-blue-600 dark:text-blue-400' :
                    line.includes('print') || line.includes('return') ? 'text-green-600 dark:text-green-400' :
                    line.includes('#') ? 'text-neutral-500 dark:text-neutral-400 italic' :
                    line.includes('"') || line.includes("'") ? 'text-orange-600 dark:text-orange-400' :
                    line.includes('tf.') || line.includes('np.') ? 'text-cyan-600 dark:text-cyan-400' :
                    'text-neutral-800 dark:text-neutral-200'
                  }>
                    {line}
                  </span>
                </div>
              </div>
            ))}

            {/* Blinking cursor */}
            {textIndex < codeLines.length && (
              <motion.span
                className="inline-block w-0.5 h-5 bg-blue-500 dark:bg-blue-400 ml-1 relative -top-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </div>

        {/* Compiler status bar */}
        <div className="bg-neutral-50 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-green-600 dark:text-green-400 font-mono text-xs font-medium">
              {textIndex >= codeLines.length
                ? "✓ Python script executed successfully"
                : `🐍 Typing: ${Math.floor((textIndex / codeLines.length) * 100)}%`}
            </div>
            <div className="text-neutral-500 dark:text-neutral-400 font-mono text-xs">
              {Math.floor(Math.random() * 50 + 50)}ms
            </div>
          </div>
          <div className="text-neutral-500 dark:text-neutral-400 font-mono text-xs">
            Lines: {codeLines.length}
          </div>
        </div>
      </motion.div>

      {/* Loading indicator */}
      {textIndex >= codeLines.length && (
        <motion.div
          className="mt-8 flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-neutral-700 dark:text-neutral-300 font-medium text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Executing Python script...
          </div>
          <div className="w-48 h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="flex items-center space-x-2 text-xs text-neutral-500 dark:text-neutral-400">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-neutral-300 dark:border-neutral-600 border-t-blue-500 rounded-full"
            />
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Loading components...</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
