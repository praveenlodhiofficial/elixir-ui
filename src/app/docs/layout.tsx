import Sidebar from "@/app/docs/sidebar-layout/page";

interface DocsLayoutProps {
   children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
   return (
      <div
         className="grid h-[calc(100vh-6.5rem)] w-full grid-cols-1 lg:mx-auto lg:grid-cols-[280px_1fr]"
         suppressHydrationWarning
      >
         <div className="hidden h-[calc(100vh-5.5rem)] md:pl-5 lg:block lg:pl-0">
            <Sidebar />
         </div>

         <div className="scrollbar-hide no-scrollbar overflow-x-hidden overflow-y-auto px-5 pb-8 lg:px-40">
            {children}
         </div>
      </div>
   );
}
