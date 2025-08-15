import Image from "next/image";
import Link from "next/link";
import cardData from "@/app/docs/(content)/data/card.json";

export default function CardPage() {
    const cardCount = Object.keys(cardData).length;
    
    // Separate cards into odd and even indices
    const oddIndexCards = [];
    const evenIndexCards = [];
    
    for (let i = 0; i < cardCount; i++) {
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
                        <Link key={index} href={`/docs/components/card/${index + 1}`} className="flex flex-col gap-4 group/card">
                            <div className="relative">
                                <Image
                                    src={`/components/card/card${index + 1}.png`}
                                    alt={`Card ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-fit object-contain rounded-xl border p-2 border-white/40 transition-all duration-300 saturate-105 hover:scale-99"
                                    quality={100}
                                />
                                <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover/card:opacity-0"></div>
                            </div>
                        </Link>
                    ))}
                </div>
                
                {/* Right Column - Odd indexed cards (1, 3, 5...) */}
                <div className="flex flex-col gap-4">
                    {evenIndexCards.map((index) => (
                        <Link key={index} href={`/docs/components/card/${index + 1}`} className="flex flex-col gap-4 group/card">
                            <div className="relative">
                                <Image
                                    src={`/components/card/card${index + 1}.png`}
                                    alt={`Card ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-fit object-contain rounded-xl border p-2 border-white/40 transition-all duration-300 saturate-105 hover:scale-99"
                                    quality={100}
                                />
                                <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover/card:hover:opacity-0"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}