"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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

  return (
    <GridBackground>
      <section
        ref={ref}
        className="relative flex items-start py-10 justify-center overflow-hidden"
      >
        <div className="container z-50">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <motion.div
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold font-grotesk">
                Hi, I am
                <br />
                <span className="text-primary">Siddharth Jain</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
                Full Stack Developer specializing in building exceptional
                digital experiences.
              </p>
            </motion.div>

            {/* Spotify Widget */}
            <motion.div
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SpotifyWidget />
            </motion.div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
};