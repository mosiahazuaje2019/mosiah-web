"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Layers3,
  PlugZap,
  SearchCheck,
  Server,
} from "lucide-react";
import { techStack } from "@/data/content";

const categoryStyles = [
  { icon: Code2, accent: "text-violet-600", iconBg: "bg-violet-100", border: "hover:border-violet-300", glow: "bg-violet-300/30" },
  { icon: Server, accent: "text-blue-600", iconBg: "bg-blue-100", border: "hover:border-blue-300", glow: "bg-blue-300/30" },
  { icon: Database, accent: "text-cyan-700", iconBg: "bg-cyan-100", border: "hover:border-cyan-300", glow: "bg-cyan-300/30" },
  { icon: Cloud, accent: "text-indigo-600", iconBg: "bg-indigo-100", border: "hover:border-indigo-300", glow: "bg-indigo-300/30" },
  { icon: PlugZap, accent: "text-fuchsia-600", iconBg: "bg-fuchsia-100", border: "hover:border-fuchsia-300", glow: "bg-fuchsia-300/30" },
  { icon: SearchCheck, accent: "text-emerald-700", iconBg: "bg-emerald-100", border: "hover:border-emerald-300", glow: "bg-emerald-300/30" },
];

export function TechStackSection() {
  const { t } = useLanguage();
  const technologyCount = techStack.reduce((total, category) => total + category.items.length, 0);

  return (
    <section id="tech" className="relative overflow-hidden bg-[#f7f7fb] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-200/35 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#111827_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-8 grid gap-6 lg:mb-10 lg:grid-cols-[1.2fr_1fr] lg:items-end"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-purple-700 shadow-sm backdrop-blur">
              <Layers3 size={14} />{t("Technical toolkit")}{" "}</div>
            <h2 className="text-4xl font-black tracking-[-0.055em] text-gray-950 sm:text-5xl lg:text-6xl">{t("The right tools.")}{" "}<span className="block bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">{t("Chosen with purpose.")}{" "}</span>
            </h2>
          </div>

          <div className="lg:justify-self-end lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg">{t("A production-tested stack for building fast interfaces, reliable systems and products that scale.")}{" "}</p>
            <div className="mt-4 flex items-center gap-5">
              <div>
                <span className="block text-3xl font-black tracking-tight text-gray-950">{technologyCount}+</span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{t("Technologies")}</span>
              </div>
              <span className="h-11 w-px bg-gray-300" />
              <div>
                <span className="block text-3xl font-black tracking-tight text-gray-950">{String(techStack.length).padStart(2, "0")}</span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{t("Disciplines")}</span>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, index) => {
            const style = categoryStyles[index];
            const Icon = style.icon;

            return (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,.45)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-38px_rgba(15,23,42,.4)] ${style.border}`}
              >
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full ${style.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${style.iconBg}`}>
                      <Icon size={20} className={style.accent} />
                    </div>
                    <h3 className="min-w-0 flex-1 text-xl font-bold tracking-tight text-gray-950">{t(category.name)}</h3>
                    <span className="font-mono text-xs tracking-wider text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-700 transition-colors group-hover:bg-white"
                      >
                        {t(item)}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col gap-3 border-t border-gray-300/70 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-semibold text-gray-700">{t("Tools evolve. Strong engineering principles remain.")}</span>
          <span>{t("Architecture first · Technology second")}</span>
        </motion.div>
      </div>
    </section>
  );
}
