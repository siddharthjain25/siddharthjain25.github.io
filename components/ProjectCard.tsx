import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@heroui/react";
import { ExternalLink, Github, ArrowRight, ScrollText } from "lucide-react";

import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "minimal";
  className?: string;
}

export function ProjectCard({
  project,
  variant = "default",
  className = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]),
    {
      damping: 30,
      stiffness: 150,
    }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]),
    {
      damping: 30,
      stiffness: 150,
    }
  );

  // Lighting effect based on mouse position
  const lightX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const lightY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  function onMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      className={`w-full h-full ${className}`}
      style={{
        perspective: 1200,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <Link
        className="block h-full"
        href={`${project.githubUrl}`}
        target="_blank"
      >
        <motion.div
          className="w-full h-full"
          style={{
            rotateX: variant === "default" ? rotateX : 0,
            rotateY: variant === "default" ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
        >
          <Card
            className={`
              relative h-full group 
              bg-gradient-to-br from-secondary/50 to-secondary/30
              backdrop-blur-xl 
              border border-primary/20
              hover:border-primary/50 
              rounded-2xl
              transition-all duration-500 ease-out
              overflow-hidden
              shadow-xl shadow-primary/5
              hover:shadow-2xl hover:shadow-primary/20
              ${variant === "minimal" ? "border-0 bg-transparent backdrop-blur-none" : ""}
            `}
          >
            {/* Animated background glow */}
            <motion.div
              animate={{
                opacity: isHovered ? [0.1, 0.3, 0.1] : 0,
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Shine effect */}
            <motion.div
              animate={{
                x: isHovered ? ["-100%", "200%"] : "-100%",
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 2,
              }}
            />

            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              {/* Image with improved effects */}
              <motion.div
                animate={{ scale: isHovered ? 1.08 : 1 }}
                className="w-full h-full"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  fill
                  alt={project.title}
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={project.image}
                />
              </motion.div>

              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Dynamic lighting effect on image */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at ${lightX} ${lightY}, rgba(168, 85, 247, 0.2), transparent 60%)`,
                }}
              />

              {/* Top right project type badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                <span className="text-xs font-mono text-primary">Featured</span>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6 z-10 space-y-4">
              {/* Title with icon */}
              <div className="flex items-start justify-between gap-3">
                <motion.h3
                  className="text-2xl font-bold font-grotesk group-hover:text-primary transition-colors duration-300 flex-1"
                  whileHover={{ x: 4 }}
                >
                  {project.title}
                </motion.h3>

                {/* View indicator */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : -10,
                  }}
                  className="flex-shrink-0 p-2 rounded-lg bg-primary/10 border border-primary/30"
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                </motion.div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed font-mono line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                {project.description}
              </p>

              {variant === "default" && (
                <>
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/30 transition-all duration-500" />

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/40 hover:bg-secondary transition-all group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            project.githubUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                        <span className="text-xs font-mono text-muted-foreground group-hover/btn:text-primary transition-colors">
                          Code
                        </span>
                      </motion.button>
                    )}

                    {project.srsDocUrl && (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/40 hover:bg-secondary transition-all group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            project.srsDocUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ScrollText className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                        <span className="text-xs font-mono text-muted-foreground group-hover/btn:text-primary transition-colors">
                          Docs
                        </span>
                      </motion.button>
                    )}

                    {project.demoUrl && (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            project.demoUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4 text-primary transition-colors" />
                        <span className="text-xs font-mono text-primary transition-colors">
                          Live Demo
                        </span>
                      </motion.button>
                    )}
                  </div>
                </>
              )}

              {variant === "minimal" && (
                <motion.div
                  className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-mono">View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.div>
              )}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-all duration-500" />

            {/* Dynamic Lighting Effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at ${lightX} ${lightY}, rgba(168, 85, 247, 0.1), transparent 70%)`,
              }}
            />
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
}
