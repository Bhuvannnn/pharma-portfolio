'use client';

import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../../components/sections/Hero';
import ProjectCategories from '../../components/sections/ProjectCategories';
import Experience from '../../components/sections/Experience';
import Contact from '../../components/sections/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px]" />
      </motion.div>

      {/* Content sections */}
      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="projects">
          <ProjectCategories />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </main>
  );
}