import React from 'react';
import { cn } from '@/lib/utils';


interface PageTemplateProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

const PageTemplate = ({ title, description, children, className }: PageTemplateProps) => {
  return (
    <section className={cn('flex flex-col gap-2 md:pb-3 pb-10', className)}>
      <h1 className="md:text-4xl text-3xl font-bold">{title}</h1>
      <p className="text-sm/6">{description}</p>
      {children}
      
    </section>
  );
};

const PageSubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="mb-2 border-b border-b-gray-600 pb-2" >
      {children}
    </h2>
  );
};

export { PageTemplate, PageSubTitle };
