"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingCard } from "./floating-card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0, 
  className 
}: FeatureCardProps) => {
  return (
    <FloatingCard delay={delay} className={cn("p-8 h-full", className)}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-xl flex items-center justify-center"
      >
        <Icon className="w-8 h-8 text-blue-300" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="text-center space-y-4"
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70 leading-relaxed">{description}</p>
      </motion.div>
    </FloatingCard>
  );
};