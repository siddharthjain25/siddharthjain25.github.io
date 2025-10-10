"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

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
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <GridBackground>
      <section
        ref={ref}
        className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20 pb-16"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="container z-10 px-4">
          <motion.div
            animate={inView && shouldAnimate ? "visible" : "hidden"}
            className="max-w-6xl mx-auto space-y-16"
            initial="hidden"
            variants={containerVariants}
          >
            {/* Main Content */}
            <div className="space-y-10 text-center">
              {/* Greeting Badge */}
              <motion.div
                className="flex justify-center"
                variants={itemVariants}
              >
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm border border-primary/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Available for opportunities
                </motion.span>
              </motion.div>

              {/* Main Title with Enhanced Typography */}
              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.p
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground font-mono"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Hey there! I&apos;m
                </motion.p>

                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-grotesk tracking-tight">
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Siddharth Jain
                  </motion.span>
                </h1>
              </motion.div>

              {/* Role & Description */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <p className="text-2xl md:text-3xl font-bold text-primary">
                  Full Stack Developer
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono leading-relaxed">
                  Crafting exceptional digital experiences with modern web
                  technologies. Specializing in React, Next.js, and cloud
                  solutions.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/projects">
                    <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg overflow-hidden transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40">
                      <span className="relative z-10 flex items-center gap-2">
                        View My Work
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </span>
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://drive.google.com/file/d/1Ty7tGp1wQTCig5ceojbohK8vKE-84zPQ/view"
                    target="_blank"
                  >
                    <button className="group px-8 py-4 border-2 border-primary/30 text-foreground rounded-xl font-medium text-lg hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-2">
                      Download CV
                      <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Spotify Widget Section */}
            <motion.div className="flex justify-center" variants={itemVariants}>
              <SpotifyWidget />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </GridBackground>
  );
};
