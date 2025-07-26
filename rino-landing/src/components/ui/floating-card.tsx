"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingCard = ({ children, className, delay = 0 }: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={cn(
        "backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-2xl",
        "hover:bg-white/20 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};