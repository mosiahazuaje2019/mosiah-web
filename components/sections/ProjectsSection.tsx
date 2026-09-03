"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

const projectStyles = [
  { accent: "from-violet-500 to-fuchsia-500", glow: "bg-violet-300/40", surface: "from-violet-50 via-white to-fuchsia-50" },
  { accent: "from-cyan-500 to-blue-600", glow: "bg-cyan-300/40", surface: "from-cyan-50 via-white to-blue-50" },
  { accent: "from-sky-500 to-indigo-600", glow: "bg-sky-300/40", surface: "from-sky-50 via-white to-indigo-50" },
  { accent: "from-amber-400 to-orange-500", glow: "bg-amber-300/40", surface: "from-amber-50 via-white to-orange-50" },
];

export function ProjectsSection() {
  return (
    <section id="work" className="relative overflow-hidden bg-[#f7f7fb] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-blue-200/35 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#111827_1px,transparent_1px),linear-gradient(90deg,#111827_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-purple-700 shadow-sm backdrop-blur">
              <Sparkles size={14} /> Selected work
            </div>
            <h2 className="text-5xl font-black tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-7xl">
              Built to make
              <span className="block bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">an impact.</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Production products where engineering, business logic and thoughtful experiences come together.
            </p>
            <div className="mt-7 flex items-center gap-4 text-sm font-semibold text-gray-500">
              <span className="h-px w-14 bg-gray-300" />
              Scroll to explore {String(projects.length).padStart(2, "0")} case studies
            </div>
          </div>
        </motion.header>

        <div className="space-y-16 lg:space-y-28">
          {projects.map((project, index) => {
            const style = projectStyles[index % projectStyles.length];
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative lg:col-span-7">
                  <div className={`absolute -inset-8 -z-10 rounded-full ${style.glow} opacity-60 blur-3xl`} />
                  <div className="group relative rounded-[2rem] border border-white/90 bg-white/70 p-2.5 shadow-[0_32px_80px_-32px_rgba(31,41,55,0.35)] backdrop-blur sm:p-4">
                    <div className="overflow-hidden rounded-[1.45rem] border border-gray-200 bg-gray-950">
                      <div className="flex h-11 items-center border-b border-white/10 bg-gray-900 px-4">
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="mx-auto flex h-6 w-1/2 items-center justify-center rounded-md border border-white/5 bg-white/[0.06] text-[9px] font-medium tracking-widest text-gray-400">
                          {project.title.toLowerCase()}.product
                        </div>
                      </div>

                      {project.image ? (
                        <div className="aspect-[3/2] overflow-hidden">
                          <Image src={project.image} alt={project.imageAlt || `${project.title} project preview`} width={1536} height={1024} sizes="(max-width: 1024px) 100vw, 58vw" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                        </div>
                      ) : (
                        <div className={`relative aspect-[3/2] overflow-hidden bg-gradient-to-br ${style.surface}`}>
                          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,#64748b_1px,transparent_1px)] [background-size:22px_22px]" />
                          <div className="absolute inset-[12%] rotate-[-3deg] rounded-2xl border border-white bg-white/80 p-5 shadow-2xl backdrop-blur transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.03] sm:p-8">
                            <div className={`mb-6 h-2.5 w-24 rounded-full bg-gradient-to-r ${style.accent}`} />
                            <div className="grid h-[70%] grid-cols-3 gap-3">
                              <div className="col-span-2 rounded-xl bg-gray-900 p-4">
                                <div className="flex h-full items-end gap-2">
                                  {[42, 68, 51, 82, 62, 92, 72].map((height, itemIndex) => (
                                    <span key={itemIndex} className={`flex-1 rounded-t bg-gradient-to-t ${style.accent}`} style={{ height: `${height}%` }} />
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-3">
                                <div className="h-[44%] rounded-xl bg-gray-100" />
                                <div className={`h-[44%] rounded-xl bg-gradient-to-br ${style.accent} opacity-80`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`absolute -bottom-4 rounded-full bg-gray-950 px-5 py-2 text-xs font-bold tracking-[0.18em] text-white shadow-xl ${reversed ? "-right-3 sm:-right-5" : "-left-3 sm:-left-5"}`}>
                    {project.image ? "PRODUCT PREVIEW" : "CASE STUDY"}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="mb-5 flex items-center gap-4">
                    <span className={`bg-gradient-to-r ${style.accent} bg-clip-text text-sm font-black tracking-[0.22em] text-transparent`}>
                      / {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-gray-200" />
                  </div>
                  <h3 className="text-4xl font-black tracking-[-0.04em] text-gray-950 sm:text-5xl">{project.title}</h3>
                  <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">{project.description}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-gray-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">{technology}</span>
                    ))}
                  </div>

                  <div className="mt-8 border-l-2 border-gray-200 pl-5">
                    <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Key contributions</p>
                    <ul className="space-y-2.5">
                      {project.contributions.slice(0, 4).map((contribution) => (
                        <li key={contribution} className="flex gap-3 text-sm font-medium text-gray-700">
                          <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-purple-600" />
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.website && (
                    <a href={project.website} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-bold text-gray-950 hover:text-purple-700">
                      Explore project <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
