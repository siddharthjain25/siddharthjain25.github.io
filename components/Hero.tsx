"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, Progress, CardBody } from "@heroui/react";
import { useEffect, useState } from "react";

import { GridBackground } from "./ui/grid-background";

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (!hasVisited) {
      // First visit - apply the delay
      const timer = setTimeout(() => {
        setShouldAnimate(true);
        localStorage.setItem("hasVisitedBefore", "true");
      }, 3700);

      return () => clearTimeout(timer);
    } else {
      // Not first visit - animate immediately
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

            {/* Project Status Cards */}
            <motion.div
              animate={inView && shouldAnimate ? { opacity: 1, y: 0 } : {}}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-muted-foreground">
                        Project Status
                      </h3>
                      <p className="font-grotesk">Available</p>
                    </div>
                  </div>
                  <Progress className="h-2" value={100} />
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-muted-foreground">
                        Response Time
                      </h3>
                      <p className="font-grotesk">&lt; 24 hours</p>
                    </div>
                  </div>
                  <Progress className="h-2" value={75} />
                </CardBody>
              </Card>

              <Card>
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-muted-foreground">
                        Lazy
                      </h3>
                      <p className="font-grotesk">100%</p>
                    </div>
                  </div>
                  <Progress className="h-2" value={98} />
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
};
