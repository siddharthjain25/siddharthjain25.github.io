"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GridBackground } from "./ui/grid-background";
import SpotifyWidget from "./SpotifyWidget";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
        localStorage.setItem("hasVisitedBefore", "true");
      }, 3700);

      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(true);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
      },
    },
  };

  return (
    <GridBackground>
      <section
        ref={ref}
        className="relative flex items-center justify-center min-h-[90vh] overflow-hidden"
      >
        <div className="container z-50 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView && shouldAnimate ? "visible" : "hidden"}
            className="max-w-5xl mx-auto text-center space-y-16"
          >
            {/* Main Content */}
            <div className="space-y-8">
              {/* Greeting Badge */}
              <motion.div variants={itemVariants} className="inline-flex">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for work
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div variants={itemVariants}>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-grotesk tracking-tight">
                  <span className="block text-muted-foreground/60 text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                    Hi, I am
                  </span>
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Siddharth Jain
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-mono leading-relaxed"
              >
                Full Stack Developer specializing in building exceptional
                digital experiences with modern technologies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link href="/projects">
                  <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 border-2 border-primary/20 text-foreground rounded-lg font-medium text-lg hover:border-primary/40 hover:bg-primary/5 transition-all">
                    Get In Touch
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Spotify Widget Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <p className="text-sm md:text-base text-muted-foreground font-mono uppercase tracking-wider">
                  Currently Listening
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
              </div>
              <div className="flex justify-center">
                <SpotifyWidget />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </GridBackground>
  );
};
