"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Check, Gauge, Search, Sparkles } from "lucide-react";
import { seoFeatures } from "@/data/content";

const featureStyles = [
  { icon: Search, label: "FOUNDATIONS", color: "text-violet-600", surface: "bg-violet-100", border: "border-violet-200" },
  { icon: Gauge, label: "EXPERIENCE", color: "text-cyan-700", surface: "bg-cyan-100", border: "border-cyan-200" },
  { icon: Braces, label: "SEMANTICS", color: "text-blue-600", surface: "bg-blue-100", border: "border-blue-200" },
  { icon: Sparkles, label: "AI DISCOVERY", color: "text-fuchsia-600", surface: "bg-fuchsia-100", border: "border-fuchsia-200" },
];

export function SEOSection() {
  return (
    <section id="seo" className="relative overflow-hidden bg-gradient-to-b from-[#f7f7fb] via-blue-50/70 to-slate-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-[32rem] w-[32rem] rounded-full bg-violet-200/55 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-blue-200/55 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.05fr_.95fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 shadow-sm backdrop-blur">
              <Search size={14} /> Search &amp; AI visibility
            </div>
            <h2 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-7xl">
              Built to be found.
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Structured to be understood.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-gray-600 lg:justify-self-end lg:pb-2 sm:text-xl">
            Visibility is not a plugin added at launch. It starts in the architecture—with fast pages,
            meaningful structure and content that search engines can confidently interpret.
          </p>
        </motion.header>

        <div className="grid gap-4 md:grid-cols-2">
          {seoFeatures.map((feature, index) => {
            const style = featureStyles[index];
            const Icon = style.icon;

            return (
              <motion.article
                key={feature.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border ${style.border} bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_70px_-38px_rgba(15,23,42,.35)] sm:p-8`}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${style.border} ${style.surface}`}>
                    <Icon size={23} className={style.color} />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-gray-400">
                    0{index + 1} / {style.label}
                  </span>
                </div>
                <h3 className="mb-6 text-2xl font-bold tracking-tight text-gray-950">{feature.category}</h3>
                <ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-gray-600">
                      <Check size={15} className={`mt-1 shrink-0 ${style.color}`} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mt-5 grid overflow-hidden rounded-3xl border border-blue-800/50 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white shadow-[0_28px_80px_-36px_rgba(15,23,42,.6)] lg:grid-cols-[.85fr_1.15fr]"
        >
          <div className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-fuchsia-200">
              <Sparkles size={18} /> Beyond traditional search
            </div>
            <h3 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">Generative Engine Optimization</h3>
          </div>
          <div className="p-7 sm:p-10">
            <p className="text-lg leading-8 text-slate-200">
              GEO makes expertise easier for AI assistants to identify, understand and cite. Clear entities,
              direct answers and machine-readable context help your content become a trusted source.
            </p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 font-bold text-white hover:text-cyan-200">
              Build a discoverable product <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
