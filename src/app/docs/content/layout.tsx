import { cn } from "@/lib/utils"

interface ContentLayoutProps {
    children: React.ReactNode
    className?: string
}

export default function ContentLayout({ children, className }: ContentLayoutProps) {
     return <div className={cn(className)}>{children}</div>
}