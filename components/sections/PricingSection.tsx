"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const plans: { name: string; price: number; description: string; features: string[]; adBudget?: number }[] = [
  {
    name: "Starter",
    price: 350000,
    description: "For businesses ready to take orders through WhatsApp.",
    features: ["WhatsApp Business profile setup", "Welcome message and 5 quick replies", "WhatsApp catalog with up to 15 products", "Contact link and QR code", "1 round of revisions"],
  },
  {
    name: "Brand clarity",
    price: 750000,
    description: "For businesses that want a clear message and a consistent presentation.",
    features: ["Everything in Starter", "1 brand positioning session", "Audience, value proposition and key messages", "WhatsApp catalog expanded to 30 products", "Shareable PDF catalog with up to 10 pages", "2 rounds of revisions in total"],
  },
  {
    name: "Complete presence",
    price: 1450000,
    description: "For businesses that also need a website to present their offer.",
    features: ["Everything in Brand clarity", "Landing page with up to 5 sections", "Mobile and desktop design", "WhatsApp button and contact form", "Basic on-page SEO and publishing", "2 rounds of revisions in total"],
  },
  {
    name: "Instagram essentials",
    price: 600000,
    adBudget: 300000,
    description: "For businesses starting a consistent presence on Instagram.",
    features: ["Instagram Business profile optimization and WhatsApp link", "Monthly content calendar", "4 feed posts and 4 stories per month", "Preparation and management of 1 monthly Instagram campaign", "Campaign objective, audience, copy and 2 ad creatives", "Monthly results report", "1 round of revisions"],
  },
  {
    name: "Social growth",
    price: 900000,
    adBudget: 600000,
    description: "For businesses growing their presence on Instagram and Facebook.",
    features: ["Everything in Instagram essentials", "Content adapted and published on Facebook", "8 feed posts and 8 stories per month in total", "2 reels per month using your footage", "Weekly optimization of the monthly campaign", "Monthly results review call"],
  },
  {
    name: "Social reach",
    price: 1200000,
    adBudget: 900000,
    description: "For businesses that need more content and closer campaign follow-up.",
    features: ["Everything in Social growth", "12 feed posts and 12 stories per month in total", "4 reels per month in total using your footage", "4 ad creatives in total for the monthly campaign", "Twice-weekly optimization of the monthly campaign", "2 rounds of revisions in total"],
  },
];

const formatPrice = (price: number) => `$${new Intl.NumberFormat("es-CO").format(price)}`;
const monthlyPlans = plans.filter((plan) => plan.adBudget !== undefined);
const averageMonthlyTotal = monthlyPlans.reduce((total, plan) => total + plan.price + (plan.adBudget ?? 0), 0) / monthlyPlans.length;

export function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="plans" aria-labelledby="plans-title" className="scroll-mt-24 bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-violet-700">{t("Plans for businesses in Colombia")}</p>
          <h2 id="plans-title" className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{t("Start small. Grow at your pace.")}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{t("Choose from 3 one-time setup plans and 3 monthly social media plans. All prices in Colombian pesos.")}</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article key={plan.name} className={`flex flex-col rounded-3xl border p-6 sm:p-8 ${index === 2 ? "border-violet-300 bg-violet-50 shadow-lg shadow-violet-100/50" : "border-slate-200 bg-white"}`}>
              <div className="mb-4 min-h-6 text-xs font-bold uppercase tracking-wider text-violet-700">
                {plan.adBudget !== undefined ? t("Social media · Monthly") : index === 2 ? t("Includes all 4 services") : `0${index + 1}`}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-950">{t(plan.name)}</h3>
              <p className="mt-3 min-h-20 text-base leading-7 text-slate-600">{t(plan.description)}</p>
              <div className="my-7">
                <p className="mb-1 text-sm text-slate-600">{t(plan.adBudget !== undefined ? "Monthly management" : "Starting at")}</p>
                <p className="flex flex-wrap items-baseline gap-x-2 text-4xl font-black tracking-tight text-slate-950">
                  {formatPrice(plan.price)} <span className="text-sm font-semibold tracking-normal">COP</span>
                </p>
                <p className="mt-2 text-sm text-slate-600">{t(plan.adBudget !== undefined ? "Per month · Ad spend separate" : "One-time payment")}</p>
              </div>
              {plan.adBudget !== undefined && (
                <div className="mb-6 rounded-xl bg-slate-100 p-4 text-sm leading-6 text-slate-700">
                  <p>{t("Proposed monthly ad budget")}: <strong>{formatPrice(plan.adBudget)} COP</strong></p>
                  <p className="mt-2">{t("Estimated monthly total")}: <strong>{formatPrice(plan.price + plan.adBudget)} COP</strong></p>
                </div>
              )}
              <ul className="mb-8 space-y-3 border-t border-slate-200 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                    <Check size={17} aria-hidden="true" className="mt-1 shrink-0 text-violet-700" />
                    {t(feature)}
                  </li>
                ))}
              </ul>
              <a href="#contact" aria-label={`${t("Ask about this plan")}: ${t(plan.name)}`} className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-center font-bold ${index === 2 ? "bg-violet-700 text-white hover:bg-violet-800" : "bg-slate-950 text-white hover:bg-slate-800"}`}>
                {t("Ask about this plan")} <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-slate-950">{t("Average monthly campaign budget")}</h3>
          <p className="mt-3 text-3xl font-black text-violet-700">{formatPrice(averageMonthlyTotal)} COP</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t("Average of these 3 monthly plans, including management and proposed ad spend. This is a planning estimate, not a market average. Ad spend is paid directly to Meta and agreed before launch.")}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t("Each monthly plan includes preparation and management of 1 campaign per month. Higher tiers replace content quantities rather than adding them. Setup plans are purchased separately; photography, filming and inbox management are not included.")}</p>
        </div>

        <aside className="mt-8 rounded-2xl bg-slate-50 p-6 sm:p-8" aria-labelledby="plans-scope">
          <h3 id="plans-scope" className="font-bold text-slate-950">{t("A clear scope from the start")}</h3>
          <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-600 md:grid-cols-2">
            <p>{t("You provide your logo, product photos, prices and business information. Brand positioning covers strategy and messaging; logo design is quoted separately.")}</p>
            <p>{t("Domain, hosting, ongoing maintenance and paid advertising are quoted separately. WhatsApp setup covers the Business app; API integrations and chatbots require a separate quote.")}</p>
          </div>
          <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">{t("These are starting prices. Your quote will confirm the scope, timeline and total payable, including any applicable taxes, before work begins.")}</p>
        </aside>
      </div>
    </section>
  );
}
