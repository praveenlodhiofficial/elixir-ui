"use client"

import { motion } from "framer-motion"

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  )
}