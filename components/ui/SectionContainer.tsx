import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl w-full">{children}</div>
    </section>
  );
}
