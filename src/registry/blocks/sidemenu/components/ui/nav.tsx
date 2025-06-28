import { motion } from "framer-motion";
import Link from "next/link";

interface NavProps {
    links?: { title: string, href: string }[];
    footerLinks?: { title: string, href: string }[];
}

const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 0,
        translateX: -20,
    },
    enter: ({ index }: { index: number }) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.6,
            opacity: { duration: 0.2 },
            delay: 0.1 + index * 0.11,
            ease: [0.215, 0.61, 0.355, 1],
        },
    }),
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

const footerAnimation = {
    initial: {
        opacity: 0,
        translateY: 10,
    },
    enter: ({ index }: { index: number }) => ({
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.4,
            delay: 0.6 + index * 0.1, // Footer links will start appearing after sidebar links are done
            ease: [0.215, 0.61, 0.355, 1],
        },
    }),
    exit: {
        opacity: 0,
        translateY: 10,
        transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

export default function Nav({ links, footerLinks }: NavProps) {
    return (
        <div className="text-black font-medium uppercase flex flex-col gap-12 justify-between h-full px-8 pt-20 pb-10 box-border rounded-2xl">
            <div className="flex flex-col space-y-4 text-5xl">
                {links?.map((link, index) => (
                    <div key={index} style={{ perspective: "120px", perspectiveOrigin: "right" }}>
                        <motion.div
                            custom={{ index }}
                            variants={perspective}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                        >
                            <Link href={link.href} className="flex items-center hover:border-l-3 border-black transition-all duration-75">
                                <div className="hover:pl-2 transition-all duration-150 scroll-smooth ease-linear">
                                {link.title}
                                </div>
                                </Link>
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between text-xs">
                {footerLinks?.map((link, index) => (
                    <motion.div
                        key={index}
                        custom={{ index }}
                        variants={footerAnimation}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        <Link href={link.href}>{link.title}</Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
