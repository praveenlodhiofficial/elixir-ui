"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavItems = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/components" },
  { title: "Templates", href: "/templates" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledWidth, setScrolledWidth] = useState("95vw");
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  useEffect(() => {
    const updateWidth = () => {
      if (window.matchMedia("(max-width: 950px)").matches) {
        // For small screens
        setScrolledWidth(scrolled ? "90%" : "100vw");
      } else {
        // For medium and large screens
        setScrolledWidth(scrolled ? "65%" : "80vw");
      }
    };

    // Set width on mount and on resize
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [scrolled]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="text-black dark:text-white text-sm tracking-wider font-poppins font-normal">
      <motion.nav
        animate={{
          boxShadow: scrolled ? "0 0 10px 0 rgba(0, 0, 0, 0.1)" : "none",
          width: scrolledWidth,
          y: scrolled ? 5 : 1,
          borderRadius: scrolled ? "50px" : "15px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="z-50 fixed inset-x-0 top-10 px-5 py-1 md:py-2 mx-auto flex items-center justify-between backdrop-blur-sm"
      >
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo/elixir-logo-light.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-7.5 h-7.5 mr-0.5 object-contain dark:invert"
          />
          <span className="text-3xl font-bold">Elixir UI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          {NavItems.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className={`relative px-2 py-1 capitalize tracking-wide ${
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "hover:text-primary transition-all duration-200"
              }`}
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {isHovered === idx && (
                <motion.div
                  layoutId="hovered-span"
                  className="absolute bottom-0 left-0 right-0"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ThemeToggleButton
            className="size-4 cursor-pointer"
            variant="circle-blur"
            start="top-right"
          />
          <Button asChild variant="ghost" className="bg-lime-400 text-black md:block hidden rounded-full hover:bg-lime-400/80 dark:hover:bg-lime-400/80 dark:text-black">
            <Link href="/docs">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation Button with Animated Icon */}
        <motion.button
          className="md:hidden p-2 rounded-full  hover:bg-gray-200/20 dark:hover:bg-gray-800/20 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isMenuOpen ? (
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </motion.div>
        </motion.button>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{
          y: isMenuOpen ? 0 : "50%",
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          opacity: { duration: 0.2 },
        }}
        className="fixed right-0 top-0 z-50 h-1/2 text-black dark:text-white font-bold rounded-b-[3rem] w-full bg-black/10 bg-cover bg-center bg-no-repeat dark:bg-white/10 backdrop-blur-md md:hidden"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/30 dark:border-white/30">
          <Link
            href="/"
            className="flex gap-2 items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo/elixir-logo-light.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </Link>

          <motion.button
            className="p-2 flex items-center gap-5 rounded-full "
            onClick={() => setIsMenuOpen(false)}
            whileTap={{ scale: 0.95 }}
          >
            <ThemeToggleButton
                className="size-4 cursor-pointer"
                variant="circle-blur"
                start="top-right"
              />
            <X size={24} />
          </motion.button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col p-6 items-center justify-center">
            {NavItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 50, opacity: 0 }}
                animate={{
                  x: isMenuOpen ? 0 : 50,
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={item.href}
                  className={`block text-lg font-medium capitalize tracking-wide py-2 px-4 rounded-xl transition-all duration-200 ${
                    pathname === item.href
                      ? "text-primary bg-primary/10 font-semibold"
                      : "hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </nav>
  );
}
