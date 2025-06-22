import Sidebar from './sidebar-layout/(sidebar)/page'

interface DocsLayoutProps {
     children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
     return (
          <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-[300px_1fr]">
               <div className="pr-10">
                    <Sidebar />
               </div>

               <div className="h-full overflow-y-auto">{children}</div>
          </div>
     )
}
