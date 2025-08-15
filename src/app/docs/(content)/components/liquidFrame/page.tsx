import Image from "next/image";
import Link from "next/link";
import liquidFrameData from "@/app/docs/(content)/data/liquidFrame.json";

export default function LiquidFramePage() {
    const liquidFrameCount = Object.keys(liquidFrameData).length;
    
    // Separate cards into odd and even indices
    const oddIndexCards = [];
    const evenIndexCards = [];
    
    for (let i = 0; i < liquidFrameCount; i++) {
        if (i % 2 === 0) {
            // Even index (0, 2, 4...) goes to left column
            oddIndexCards.push(i);
        } else {
            // Odd index (1, 3, 5...) goes to right column
            evenIndexCards.push(i);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 group">
                {/* Left Column - Even indexed cards (0, 2, 4...) */}
                <div className="flex flex-col gap-4">
                    {oddIndexCards.map((index) => (
                        <Link key={index} href={`/docs/components/liquidFrame/${index + 1}`} className="flex flex-col gap-4 group/card">
                            <Image
                                src={`/components/liquidFrame/liquidFrame${index + 1}.png`}
                                alt={`LiquidFrame ${index + 1}`}
                                width={500}
                                height={500}
                                className="w-full h-fit object-contain rounded-xl border p-2 border-white/40 transition-all duration-300 saturate-90 hover:saturate-110 hover:scale-99 group-hover:opacity-60 group-hover/card:hover:opacity-100"
                                quality={100}
                            />
                        </Link>
                    ))}
                </div>
                
                {/* Right Column - Odd indexed cards (1, 3, 5...) */}
                <div className="flex flex-col gap-4">
                    {evenIndexCards.map((index) => (
                        <Link key={index} href={`/docs/components/liquidFrame/${index + 1}`} className="flex flex-col gap-4 group/card">
                            <Image
                                src={`/components/liquidFrame/liquidFrame${index + 1}.png`}
                                alt={`LiquidFrame ${index + 1}`}
                                width={500}
                                height={500}
                                className="w-full h-fit object-contain rounded-xl border p-2 border-white/40 transition-all duration-300 saturate-90 hover:saturate-110 hover:scale-99 group-hover:opacity-60 group-hover/card:hover:opacity-100"
                                quality={100}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}