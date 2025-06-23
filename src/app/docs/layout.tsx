import Navbar from '@/components/Navbar'
import Sidebar from './sidebar-layout/(sidebar)/page'

interface DocsLayoutProps {
     children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
     return (
          <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-[300px_1fr]">
               <div className="absolute top-0 z-10">
                    <Navbar />
               </div>

               <div className="pr-10 md:pl-5 lg:pl-0">
                    <Sidebar />
               </div>

               <div className="h-full overflow-y-auto">{children}</div>
          </div>
     )
}
