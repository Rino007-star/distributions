"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

export const HeroSection = ({ title, subtitle, description, className }: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("text-center space-y-8", className)}
    >
      <motion.div variants={itemVariants} className="space-y-4">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-blue-100/80 font-light"
        >
          {subtitle}
        </motion.p>
      </motion.div>
      
      <motion.p 
        variants={itemVariants}
        className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};