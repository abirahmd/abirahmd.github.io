import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="py-8 border-b border-neutral-200 last:border-0">
      <h2 className="text-xl font-bold tracking-tight text-neutral-900 mb-6">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
};