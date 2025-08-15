import Image from "next/image";
import Link from "next/link";

export default function CarouselPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
                <Link href="/docs/components/carousel/carousel1" className="flex flex-col gap-4">
                    <Image
                        src="/components/carousel/carousel1.png"
                        alt="Carousel 01"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain rounded-lg"
                        quality={100}
                    />
                </Link>
            </div>
            <div className="gap-4">
                <Link href="/docs/components/carousel/vertical-flow-carousel" className="flex flex-col gap-4">
                    <Image
                        src="/components/carousel/carousel2.png"
                        alt="Carousel 02"
                        width={500}
                        height={500}
                        className="w-full h-full object-contain rounded-lg"
                        quality={100}
                    />
                </Link>
            </div>
        </div>
    )
}