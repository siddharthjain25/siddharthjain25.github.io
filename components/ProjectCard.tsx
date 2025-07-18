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
    useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]),
    {
      damping: 30,
      stiffness: 150,
    }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]),
    {
      damping: 30,
      stiffness: 150,
    }
  );

  // Lighting effect based on mouse position
  const lightX = useTransform(mouseX, [-0.5, 0.5], ["150%", "-150%"]);
  const lightY = useTransform(mouseY, [-0.5, 0.5], ["150%", "-150%"]);

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
        perspective: 1000,
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
              bg-gradient-to-br from-zinc-900/90 via-black/95 to-zinc-900/90
              backdrop-blur-xl 
              border border-zinc-800/50
              hover:border-primary/20 
              rounded-2xl
              transition-all duration-500 ease-out
              overflow-hidden
              shadow-lg shadow-black/20
              hover:shadow-xl hover:shadow-primary/10
              before:absolute before:inset-0 
              before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent
              before:translate-x-[150%] before:skew-x-[-45deg] before:transition-transform before:duration-700 before:ease-out
              group-hover:before:translate-x-[-150%]
              after:absolute after:inset-0 
              after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]
              after:opacity-0 after:transition-opacity after:duration-500
              group-hover:after:opacity-100
              ${variant === "minimal" ? "border-0 bg-transparent backdrop-blur-none" : ""}
            `}
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <Image
                fill
                alt={project.title}
                className={`
                  object-cover transition-all duration-700 ease-out
                  filter grayscale group-hover:grayscale-0
                  scale-[1.02] group-hover:scale-110
                  ${variant === "default" ? "brightness-75 group-hover:brightness-100" : ""}
                `}
                src={project.image}
              />
              <motion.div
                className={`
                  absolute inset-0 
                  bg-gradient-to-t from-black via-black/50 to-transparent 
                  opacity-70 group-hover:opacity-40 
                  transition-opacity duration-500
                  ${variant === "minimal" ? "via-black/70" : ""}
                `}
                style={{
                  background: isHovered
                    ? `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.15), transparent 80%),
                       linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)`
                    : undefined,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative p-6 z-10">
              {/* Title */}
              <motion.h3
                className="text-2xl font-bold font-grotesk text-white mb-3 group-hover:text-primary transition-colors duration-300"
                style={{
                  textShadow: isHovered
                    ? "0 0 20px rgba(var(--primary-rgb), 0.3)"
                    : "none",
                }}
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm mb-6 line-clamp-2 group-hover:text-white/80 transition-colors duration-300">
                {project.description}
              </p>

              {variant === "default" && (
                <>
                  {/* Links */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4">
                      {project.githubUrl && (
                        <Link
                          className="text-zinc-400 hover:text-primary transition-all duration-300 hover:scale-110"
                          href={project.githubUrl}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                      {project.srsDocUrl && (
                        <Link
                          className="text-zinc-400 hover:text-primary transition-all duration-300 hover:scale-110"
                          href={project.srsDocUrl}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ScrollText className="w-5 h-5" />
                        </Link>
                      )}
                      {project.demoUrl && (
                        <Link
                          className="text-zinc-400 hover:text-primary transition-all duration-300 hover:scale-110"
                          href={project.demoUrl}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </>
              )}

              {variant === "minimal" && (
                <motion.div
                  className="flex items-center gap-2 text-zinc-400 group-hover:text-primary transition-colors duration-300 mt-auto"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm">View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                </motion.div>
              )}
            </div>

            {/* Dynamic Lighting Effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `
                  radial-gradient(
                    circle at ${lightX}% ${lightY}%, 
                    rgba(var(--primary-rgb), 0.15), 
                    transparent 80%
                  )
                `,
              }}
            />
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
}
