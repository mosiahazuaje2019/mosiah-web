"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Mosiah<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">.</span>
            </h3>
            <p className="text-gray-600">{t("Full Stack Developer")}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">{t("Web Development · SEO · GEO · Cloud")}{" "}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>© {year}{" "}{t("Mosiah Azuaje. All rights reserved.")}</p>
        </div>
      </div>
    </footer>
  );
}
