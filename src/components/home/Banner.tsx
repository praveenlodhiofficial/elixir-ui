import { Icon } from '@/components/ui/icon'

export default function AnnoncementBanner() {
     return (
          <div className="fixed top-0 z-50 h-fit w-full bg-gradient-to-r from-lime-400 to-emerald-400">
               <div className="flex items-center justify-center gap-2 px-8 py-1.5 text-center text-[10px] font-semibold text-black md:text-[13px]">
                    <Icon name="Sparkles" className="h-6 w-6 md:h-4 md:w-4" />
                    Access an ever-growing collection of premium, meticulously crafted components
                    <Icon name="Sparkles" className="h-6 w-6 md:h-4 md:w-4" />
               </div>
          </div>
     )
}
