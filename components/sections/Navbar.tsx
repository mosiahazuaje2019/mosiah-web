"use client";

import { LanguageSwitcher, useLanguage } from "@/components/i18n/LanguageProvider";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "work", "seo", "tech", "process", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "SEO & GEO", href: "#seo" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const id = href.split("#")[1];
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-slate-950/95 via-blue-950/95 to-slate-900/95 backdrop-blur-md border-b border-blue-800/40 shadow-lg shadow-slate-950/10"
          : "bg-gradient-to-r from-slate-950/45 via-blue-950/35 to-slate-900/45 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-white transition-colors duration-300"
        >
          Mosiah<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleSmoothScroll}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              className={`relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-gradient-to-r after:from-violet-400 after:to-cyan-300 after:transition-transform after:duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-white after:scale-x-100"
                  : "text-slate-300 hover:text-white after:scale-x-0"
              }`}
            >
              {t(link.name)}
            </a>
          ))}
          <Button
            size="sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >{t("Let's Work Together")}{" "}</Button>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
        {/* Mobile Menu Button */}
        <button
          className="text-white transition-colors lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t("Toggle menu")}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className={`lg:hidden backdrop-blur-md border-b px-4 py-4 space-y-4 transition-colors duration-300 ${
            isScrolled
              ? "bg-blue-950/95 border-blue-800/40"
              : "bg-white/95 border-gray-200"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleSmoothScroll}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              className={`block transition-colors text-sm font-medium ${
                activeSection === link.href.slice(1)
                  ? isScrolled
                    ? "-mx-2 rounded-lg border-l-2 border-cyan-300 bg-white/10 px-3 py-2 text-white"
                    : "-mx-2 rounded-lg border-l-2 border-purple-600 bg-purple-50 px-3 py-2 text-purple-700"
                  : isScrolled
                    ? "text-slate-200 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {t(link.name)}
            </a>
          ))}
          <Button
            size="sm"
            className="w-full"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >{t("Let's Work Together")}{" "}</Button>
        </div>
      )}
    </nav>
  );
}
