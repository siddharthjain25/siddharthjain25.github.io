"use client";

import { motion } from "framer-motion";

import { projects } from "./data/projects";

import { GridBackground } from "@/components/ui/grid-background";
import { ProjectCard } from "@/components/ProjectCard";
import { CustomCursor } from "@/components/CustomCursor";
import { FolderGit2 } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      <GridBackground>
        <section className="relative py-20 overflow-hidden">
          {/* ... background decorations ... */}
          <div className="container mx-auto px-4">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <FolderGit2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-primary/90">
                  Featured Work
                </span>
              </motion.div>
              <span className="block text-muted-foreground/60 text-2xl md:text-3xl font-medium mb-3">
                Explore My
              </span>
              <h1 className="text-5xl md:text-6xl font-bold font-grotesk mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                Portfolio Projects
              </h1>
              <p className="text-lg text-muted-foreground font-mono">
                Explore my collection of projects showcasing expertise in web
                development, cloud, and problem-solving across various domains.
              </p>
            </motion.div>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.githubUrl}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} variant="default" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </GridBackground>
    </main>
  );
}
