"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  GitBranch,
  LucideIcon,
  ChartArea,
  GitPullRequest,
  Sparkles,
  Github,
  Activity,
} from "lucide-react";

import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { GridBackground } from "@/components/ui/grid-background";
import { Skills } from "@/components/Skills";

interface Interest {
  name: string;
  icon: LucideIcon;
  description: string;
}

const interests: Interest[] = [
  {
    name: "Open Source",
    icon: GitPullRequest,
    description: "Contributing to the community",
  },
  {
    name: "AI/ML",
    icon: Brain,
    description: "Machine Learning & Neural Networks",
  },
  {
    name: "Data Analytics",
    icon: ChartArea,
    description: "Descriptive, Diagnostic, Predictive, Prescriptive Analytics",
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    description: "Security & Privacy",
  },
  {
    name: "DevOps",
    icon: GitBranch,
    description: "CI/CD & Automation",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* About Section */}
      <GridBackground>
        <About />
      </GridBackground>
      <GridBackground>
        <Education />
      </GridBackground>

      {/* Enhanced Interests Section */}
      <GridBackground>
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {/* Enhanced Header with Glow Effect */}
              <motion.div
                className="text-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <motion.h2
                  className="text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                    Areas of Interest
                  </span>
                </motion.h2>
                <motion.p
                  className="text-muted-foreground max-w-2xl mx-auto text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  Passionate about cutting-edge technologies and innovative
                  solutions
                </motion.p>
              </motion.div>

              {/* Enhanced Bento Grid Layout */}
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;

                  return (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, y: 30 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                      <div className="group relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-primary/10 hover:to-primary/5 backdrop-blur-xl transition-all duration-500 overflow-hidden">
                        {/* Glassmorphism Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Animated Border Gradient */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/50 via-blue-500/50 to-primary/50 blur-xl -z-10" />

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-6">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <Icon className="w-7 h-7 text-primary" />
                            </div>

                            <motion.div
                              className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            />
                          </div>

                          <h3 className="text-2xl font-bold font-grotesk mb-3 group-hover:text-primary transition-colors duration-300">
                            {interest.name}
                          </h3>
                          <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                            {interest.description}
                          </p>

                          {/* Hover Effect Line */}
                          <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-blue-500 rounded-full mt-6 transition-all duration-500" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </GridBackground>

      <GridBackground>
        {/* Enhanced GitHub Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {/* Enhanced Header */}
              <motion.div
                className="text-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <motion.h2
                  className="text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                    GitHub Activity
                  </span>
                </motion.h2>
                <motion.p
                  className="text-muted-foreground max-w-2xl mx-auto text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  Tracking contributions and continuous learning
                </motion.p>
              </motion.div>

              {/* Enhanced Stats Layout with Glassmorphism */}
              <div className="max-w-5xl mx-auto space-y-8">
                {/* Streak with Enhanced Glass Effect */}
                <motion.div
                  className="group relative p-1 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Activity className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold font-grotesk">
                        Contribution Streak
                      </h3>
                    </div>
                    <img
                      alt="GitHub Streak Stats"
                      className="w-full h-auto rounded-xl"
                      src="https://github-readme-streak-stats.herokuapp.com/?user=siddharthjain25&theme=highcontrast&hide_border=true&border=00000000&stroke=ffffff&ring=ffffff&fire=ffffff&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=ffffff&sideLabels=ffffff&dates=ffffff&background=00000000"
                    />
                  </div>
                </motion.div>

                {/* Contribution Graph with Glass Effect */}
                <motion.div
                  className="group relative p-1 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Activity className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold font-grotesk">
                        Contribution Graph
                      </h3>
                    </div>
                    <div className="overflow-x-auto">
                      <img
                        alt="GitHub Contribution Graph"
                        className="w-full h-auto min-w-[600px] rounded-xl"
                        src="https://github-readme-activity-graph.vercel.app/graph?username=siddharthjain25&theme=black&bg_color=00000000&color=ffffff&line=ffffff&point=ffffff&hide_border=true&custom_title="
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </GridBackground>
      <GridBackground>
        <Skills />
      </GridBackground>
    </main>
  );
}
