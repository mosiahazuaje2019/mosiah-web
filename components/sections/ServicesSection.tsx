"use client";

import { ArrowUpRight, BookOpen, Check, Globe, MessageCircle, Target } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const services = [
  {
    title: "Brand positioning",
    description: "Make it clear who you are, what you offer and why customers should choose you.",
    items: ["Audience and unique value", "Clear messaging for your channels"],
    icon: Target,
    style: "bg-violet-100 text-violet-700",
  },
  {
    title: "WhatsApp Business",
    description: "Turn your WhatsApp into a practical channel for your business.",
    items: ["Business profile setup", "Quick replies and welcome message"],
    icon: MessageCircle,
    style: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Digital catalogs",
    description: "Show what you sell in an organized catalog that is easy to share.",
    items: ["Products, photos and prices", "A format ready to share with customers"],
    icon: BookOpen,
    style: "bg-blue-100 text-blue-700",
  },
  {
    title: "Landing page",
    description: "A focused web page that explains your offer and makes contacting you easy.",
    items: ["Design for mobile and desktop", "Contact form or WhatsApp button"],
    icon: Globe,
    style: "bg-fuchsia-100 text-fuchsia-700",
  },
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 bg-slate-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-violet-700">{t("Services for your business")}</p>
          <h2 id="services-title" className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {t("Make your business")} <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">{t("easier to choose.")}</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{t("Clear messaging, products on display and an easy way to contact you. Start with what your business needs today.")}</p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, items, icon: Icon, style }) => (
            <article key={title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${style}`}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-950">{t(title)}</h3>
              <p className="mt-3 mb-6 text-base leading-7 text-slate-600">{t(description)}</p>
              <ul className="mt-auto space-y-3 border-t border-slate-100 pt-5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <Check size={16} className="mt-1 shrink-0 text-violet-600" aria-hidden="true" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl bg-slate-950 p-7 text-white sm:p-8 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-xl font-bold">{t("Not sure where to start?")}</h3>
            <p className="mt-2 max-w-2xl leading-7 text-slate-300">{t("Tell me about your business. We can choose one service or combine several around your goals.")}</p>
          </div>
          <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition-colors hover:bg-violet-100">
            {t("Let's talk about your business")} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
