import * as React from 'react';
import { cn } from '@/lib/utils';

export function InlineCode({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <code
      className={cn(
        'relative rounded dark:bg-zinc-200 dark:text-zinc-800 bg-zinc-800 text-zinc-100 px-[0.3rem] py-[0.2rem] font-mono md:text-sm/6 text-[11px]  font-bold md:font-semibold',
        className,
      )}
      {...props}
    />
  );
}