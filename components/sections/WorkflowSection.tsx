"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Compass,
  Gauge,
  PenTool,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { workflow } from "@/data/content";

const stepStyles = [
  { icon: Compass, color: "text-violet-300", surface: "bg-violet-400/10", border: "border-violet-400/20" },
  { icon: PenTool, color: "text-fuchsia-300", surface: "bg-fuchsia-400/10", border: "border-fuchsia-400/20" },
  { icon: Code2, color: "text-blue-300", surface: "bg-blue-400/10", border: "border-blue-400/20" },
  { icon: Gauge, color: "text-cyan-300", surface: "bg-cyan-400/10", border: "border-cyan-400/20" },
  { icon: BarChart3, color: "text-emerald-300", surface: "bg-emerald-400/10", border: "border-emerald-400/20" },
  { icon: RefreshCw, color: "text-amber-300", surface: "bg-amber-400/10", border: "border-amber-400/20" },
];

export function WorkflowSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1fr_.75fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
              <Sparkles size={14} /> From idea to impact
            </div>
            <h2 className="text-5xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              A clear process.
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Better outcomes.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-300 lg:justify-self-end lg:pb-2 sm:text-xl">
            Every project moves through a focused cycle—aligning business goals, thoughtful design and solid engineering with measurable improvement.
          </p>
        </motion.header>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-violet-400/60 via-blue-400/40 to-amber-300/60 lg:hidden" />
          <div className="absolute left-[8.33%] right-[8.33%] top-6 hidden h-px bg-gradient-to-r from-violet-400/60 via-blue-400/40 to-amber-300/60 lg:block" />

          <div className="grid gap-5 lg:grid-cols-6 lg:gap-3">
            {workflow.map((item, index) => {
              const style = stepStyles[index];
              const Icon = style.icon;

              return (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.09 }}
                  className="group relative grid grid-cols-[3rem_1fr] gap-4 lg:block"
                >
                  <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border ${style.border} ${style.surface} bg-slate-950 shadow-[0_0_0_7px_#020617] lg:mx-auto`}>
                    <Icon size={20} className={style.color} />
                  </div>

                  <div className={`rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/[0.08] lg:mt-8 lg:min-h-56 lg:px-5 ${style.border}`}>
                    <span className={`mb-5 block font-mono text-xs font-bold tracking-[0.2em] ${style.color}`}>
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-black tracking-tight text-white">{item.step}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.045] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500">
              <RefreshCw size={19} />
            </div>
            <div>
              <p className="font-bold text-white">Launch is the beginning, not the finish line.</p>
              <p className="mt-1 text-sm text-slate-400">Measure, learn and improve based on real user data.</p>
            </div>
          </div>
          <a href="#contact" className="shrink-0 font-bold text-cyan-300 hover:text-cyan-200">
            Start a project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
