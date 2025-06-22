import React from 'react';
import CodeCard from '@/app/(components)/components/components/code-card/code-card';
import fs from 'fs/promises';
import { cn } from '@/lib/utils';

interface PreviewCodeCardProps {
  className?: string;
  path: string;
  children?: React.ReactNode;
}

const PreviewCodeCard = async ({ className, path, children }: PreviewCodeCardProps) => {
  try {
    const demoCode = await fs.readFile(path, 'utf8');
    return (
      <CodeCard code={demoCode} className={cn('mb-12 md:mt-5', className)}>
        <div className="flex items-center justify-center">{children}</div>
      </CodeCard>
    );
  } catch (error) {
    console.error(`Error loading demo code from ${path}:`, error);
    return (
      <CodeCard className={cn('mb-12 md:mt-5', className)}>
        <div className="flex items-center justify-center">{children}</div>
      </CodeCard>
    );
  }
};

export default PreviewCodeCard;
