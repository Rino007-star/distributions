"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export const GlassButton = ({ 
  children, 
  className, 
  variant = "primary", 
  size = "md",
  onClick 
}: GlassButtonProps) => {
  const baseClasses = "backdrop-blur-md border rounded-xl font-medium transition-all duration-300 cursor-pointer";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-white/30 text-white hover:from-blue-500/30 hover:to-purple-600/30 hover:border-white/50",
    secondary: "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      <motion.span
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};