"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Nav from "./ui/nav";
import { NavButton } from "./ui/button";

interface SideMenuProps {
    cardColor?: string;
    cardImage?: string;
    imageOpacity?: number;
    imageSaturation?: number;
    links?: { title: string, href: string }[];
    footerLinks?: { title: string, href: string }[];
}

export default function SideMenu({ 
    cardColor = '#c9fd74', 
    cardImage, 
    imageOpacity = 1,
    imageSaturation = 1,
    links, 
    footerLinks 
}: SideMenuProps) {
    const [isActive, setIsActive] = useState(false)

    const variants = {
        open: {
            width: 400,
            height: 'fit-content',
            backgroundColor: cardImage ? 'transparent' : cardColor,
            borderRadius: '20px',
            transition: {
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1]
            },
            top: -5,
            right: -5,
        },
        closed: {
            width: '80px',
            height: '30px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderRadius: '20px',
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1]
            },
            top: 0,
            right: 0,
        }
    }

    return (
        <div className="absolute top-2 right-2 lg:top-5 lg:right-5 scale-85 md:scale-100 origin-top-right">
            <motion.div
                className="relative sm:w-full"
                variants={variants}
                initial="closed"
                animate={isActive ? "open" : "closed"}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
                {cardImage && (
                    <div 
                        className="absolute inset-0 rounded-[20px] overflow-hidden"
                        style={{
                            backgroundImage: `url(${cardImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: imageOpacity,
                            filter: `saturate(${imageSaturation})`,
                        }}
                    />
                )}
                <div className="relative z-10">
                    <AnimatePresence mode="wait">
                        {isActive && (
                            <motion.div
                                key="nav"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Nav links={links} footerLinks={footerLinks} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <NavButton isActive={isActive} setIsActive={setIsActive} menuBgColor={cardColor} menuBgImage={cardImage} />
                </div>
            </motion.div>
        </div>
    )
}