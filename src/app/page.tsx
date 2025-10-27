"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlassNavbar } from "@/components/ui/glass-navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FloatingCard } from "@/components/ui/floating-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { GlassButton } from "@/components/ui/glass-button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that drive engagement and conversions.",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Comprehensive cybersecurity services to protect your digital assets and data.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhance your application's speed, efficiency, and scalability for optimal performance.",
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Expert developers to extend your team's capabilities and accelerate project delivery.",
  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    content: "RINO transformed our vision into a stunning reality. Their expertise and attention to detail exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Digital Ventures",
    content: "Working with RINO was seamless. They delivered our project on time and within budget while maintaining exceptional quality.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "InnovateCorp",
    content: "The team at RINO brought innovative solutions to complex challenges. Their professionalism is unmatched.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <GlassNavbar logo="RINO" navItems={navItems} />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <HeroSection
            title="RINO"
            subtitle="Innovative Software Solutions"
            description="We craft exceptional digital experiences through cutting-edge software development, bringing your ideas to life with precision, creativity, and technical excellence."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <GlassButton size="lg" variant="primary">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </GlassButton>
            <GlassButton size="lg" variant="secondary">
              View Our Work
            </GlassButton>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FloatingCard key={stat.label} delay={index * 0.1} className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We offer comprehensive software solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose RINO?
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                At RINO, we combine technical expertise with creative innovation to deliver 
                software solutions that drive real business results. Our team of experienced 
                developers and designers work closely with you to understand your vision and 
                bring it to life.
              </p>
              
              <div className="space-y-4">
                {[
                  "Agile development methodology",
                  "Cutting-edge technologies",
                  "24/7 support and maintenance",
                  "Scalable and secure solutions"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FloatingCard className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">Our Mission</div>
                    <p className="text-white/70">
                      To empower businesses with innovative software solutions that drive growth, 
                      enhance efficiency, and create lasting value in an ever-evolving digital world.
                    </p>
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/70">
              Don&apos;t just take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FloatingCard key={testimonial.name} delay={index * 0.1} className="p-8">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FloatingCard className="p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help bring your vision to life with our 
                cutting-edge software development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton size="lg" variant="primary">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </GlassButton>
                <GlassButton size="lg" variant="secondary">
                  Schedule a Call
                </GlassButton>
              </div>
            </motion.div>
          </FloatingCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">RINO</div>
          <p className="text-white/60 mb-6">
            Innovative Software Solutions for Modern Businesses
          </p>
          <div className="text-white/40 text-sm">
            © 2024 RINO. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
