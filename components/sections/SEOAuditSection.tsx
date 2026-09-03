"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { GradientText } from "@/components/ui/GradientText";

export function SEOAuditSection() {
  const scores = [
    { label: "Performance", value: 95, color: "from-green-400 to-emerald-400" },
    { label: "Accessibility", value: 95, color: "from-blue-400 to-cyan-400" },
    { label: "Best Practices", value: 95, color: "from-purple-400 to-pink-400" },
    { label: "SEO", value: 100, color: "from-orange-400 to-red-400" },
  ];

  return (
    <SectionContainer className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-14"
      >
        <div className="mx-auto mb-5 w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 shadow-sm">
          Measurable quality
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-gray-950 mb-4">
          Performance you can <GradientText>measure.</GradientText>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Lighthouse targets that keep speed, accessibility and search readiness accountable.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {scores.map((score, index) => (
          <motion.div
            key={score.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(15,23,42,.35)]"
          >
            {/* Circular Score */}
            <div className="relative w-32 h-32 mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(55, 65, 81, 0.5)"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  strokeWidth="8"
                  stroke={`url(#gradient-${index})`}
                  strokeDasharray={`${(score.value / 100) * 2 * Math.PI * 45} ${
                    2 * Math.PI * 45
                  }`}
                  initial={{ strokeDasharray: `0 ${2 * Math.PI * 45}` }}
                  whileInView={{
                    strokeDasharray: `${(score.value / 100) * 2 * Math.PI * 45} ${
                      2 * Math.PI * 45
                    }`,
                  }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={`rgb(${score.color === "from-green-400 to-emerald-400" ? "74, 222, 128" : score.color === "from-blue-400 to-cyan-400" ? "96, 165, 250" : score.color === "from-purple-400 to-pink-400" ? "192, 132, 250" : "251, 146, 60"})`} />
                  </linearGradient>
                </defs>
              </svg>
              {/* Score text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">{score.value}</span>
                <span className="text-xs text-gray-600">/100</span>
              </div>
            </div>

            {/* Label */}
            <p className="text-center font-bold text-gray-900">{score.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
