"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

import { motion } from "framer-motion";
import { Braces, CloudCog, Search } from "lucide-react";

const strengths = [
  {
    icon: Braces,
    label: "Product engineering",
    detail: "Frontend, backend and the details in between.",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: CloudCog,
    label: "Scalable systems",
    detail: "Reliable architecture, integrations and cloud.",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Search,
    label: "Organic growth",
    detail: "Performance, technical SEO and discoverability.",
    color: "text-fuchsia-600 bg-fuchsia-100",
  },
];

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
        >
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-purple-700">
              <span className="h-px w-10 bg-purple-400" />{t("About me")}{" "}</div>
            <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.045em] text-gray-950 sm:text-5xl lg:text-6xl">{t("I connect code with")}{" "}<span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">{t("real business impact.")}</span>
            </h2>

            <div className="mt-9 flex items-center gap-4">
              <span className="text-2xl font-black tracking-[-0.04em] text-gray-950">{t("END TO END")}</span>
              <span className="max-w-32 text-sm font-semibold leading-snug text-gray-500">{t("thinking across the entire product")}{" "}</span>
            </div>
          </div>

          <div className="lg:pt-10">
            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>{t("I work across the full stack—from polished interfaces and backend systems to cloud infrastructure, integrations and technical SEO.")}{" "}</p>
              <p>{t("That end-to-end perspective helps me make better decisions: architecture supports performance, performance improves discovery, and every technical choice serves the people using the product.")}{" "}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true, amount: 0.4 }}
              className="mt-9 divide-y divide-gray-200 border-y border-gray-200 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            >
              {strengths.map(({ icon: Icon, label, detail, color }) => (
                <div key={label} className="group flex gap-4 py-5 sm:block sm:px-5 sm:first:pl-0 sm:last:pr-0">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color} transition-transform duration-300 group-hover:-translate-y-1`}>
                    <Icon size={19} />
                  </div>
                  <div className="sm:mt-4">
                    <h3 className="text-sm font-bold text-gray-950">{t(label)}</h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">{t(detail)}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
