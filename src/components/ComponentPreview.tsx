"use client";

interface ComponentPreviewProps {
   className?: string;
   children?: React.ReactNode;
}

export function ComponentPreview({ className = "", children }: ComponentPreviewProps) {
   return (
      <div className={`scrollbar-hide h-full w-full overflow-y-auto rounded-lg ${className}`}>
         {children}
      </div>
   );
}
