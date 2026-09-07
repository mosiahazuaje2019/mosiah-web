"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Download,
  Gauge,
  Search,
} from "lucide-react";

const technologies = ["Next.js", "React", "TypeScript", "Laravel", "Node.js", "Cloud"];

const capabilities = [
  { icon: Gauge, label: "Performance", value: "95+", color: "text-cyan-300", surface: "bg-cyan-400/10 border-cyan-400/20" },
  { icon: Search, label: "SEO ready", value: "Built in", color: "text-violet-300", surface: "bg-violet-400/10 border-violet-400/20" },
  { icon: Braces, label: "Full stack", value: "End to end", color: "text-fuchsia-300", surface: "bg-fuchsia-400/10 border-fuchsia-400/20" },
];

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-12 h-[34rem] w-[34rem] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[38rem] w-[38rem] rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>{t("Available for selected projects")}{" "}</motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
            className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >{t("I build fast, scalable")}{" "}<span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">{t("& search-ready")}{" "}</span>{t("web experiences.")}{" "}</motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >{t("Full Stack Developer turning complex ideas into polished digital products—engineered for users, search engines and long-term growth.")}{" "}</motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-violet-950/30 transition-all hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500"
            >{t("Explore my work")}{" "}<ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/cv/mosiah-azuaje-cv-2026.pdf"
              download="Mosiah_Azuaje_CV_2026.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-7 py-4 font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.11]"
            >
              <Download size={19} />{t("Download CV")}{" "}</a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
            className="mt-10 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6"
          >
            <span className="mr-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t("Core stack")}</span>
            {technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300">
                {t(technology)}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-12 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-3 shadow-[0_40px_100px_-35px_rgba(0,0,0,.75)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#07111f]">
              <div className="flex h-12 items-center border-b border-white/10 px-5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="mx-auto font-mono text-[10px] tracking-[0.18em] text-slate-500">{t("PRODUCT.SYSTEM")}</span>
              </div>

              <div className="p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs text-violet-300">{t("// production-ready")}</p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight">{t("Engineering that performs.")}</h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500">
                    <CheckCircle2 size={21} />
                  </div>
                </div>

                <div className="space-y-3">
                  {capabilities.map(({ icon: Icon, label, value, color, surface }, index) => (
                    <motion.div
                      key={label}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 4 + index, repeat: Infinity, delay: index * 0.6 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${surface}`}>
                        <Icon size={19} className={color} />
                      </div>
                      <span className="font-semibold text-slate-300">{t(label)}</span>
                      <span className={`ml-auto font-mono text-sm font-bold ${color}`}>{t(value)}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                  {[{ value: "7+", label: "Years" }, { value: "15+", label: "Apps" }, { value: "100%", label: "Committed" }].map((metric) => (
                    <div key={metric.label}>
                      <p className="text-xl font-black text-white">{metric.value}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">{t(metric.label)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
