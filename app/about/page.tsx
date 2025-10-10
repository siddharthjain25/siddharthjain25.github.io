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
import { Card, CardContent } from "@/components/ui/card";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";

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
    <main className="min-h-screen bg-black text-white">
      {/* About Section */}
      <About />
      <Education />

      {/* Minimal Interests Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Minimal Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-primary/20" />
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold font-grotesk">
                Areas of Interest
              </h2>
              <div className="h-px flex-1 bg-primary/20" />
            </div>
          </motion.div>

          {/* Simple List Layout */}
          <div className="max-w-4xl mx-auto space-y-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon;

              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <motion.div
                    className="group flex items-center gap-6 p-6 rounded-xl border border-border hover:border-primary/40 bg-secondary/30 hover:bg-secondary/50 transition-all cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold font-grotesk mb-1 group-hover:text-primary transition-colors">
                        {interest.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">
                        {interest.description}
                      </p>
                    </div>

                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simplified GitHub Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container mx-auto px-4">
          {/* Minimal Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-primary/20" />
              <Github className="w-5 h-5 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold font-grotesk">
                GitHub Activity
              </h2>
              <div className="h-px flex-1 bg-primary/20" />
            </div>
          </motion.div>

          {/* Clean Stats Layout */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Streak */}
            <motion.div
              className="p-6 rounded-xl border border-border bg-secondary/30 hover:border-primary/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img
                alt="GitHub Streak Stats"
                className="w-full h-auto"
                src="https://github-readme-streak-stats.herokuapp.com/?user=siddharthjain25&theme=highcontrast&hide_border=true&border=00000000&stroke=ffffff&ring=ffffff&fire=ffffff&currStreakNum=ffffff&sideNums=ffffff&currStreakLabel=ffffff&sideLabels=ffffff&dates=ffffff&background=00000000"
              />
            </motion.div>

            {/* Contribution Graph */}
            <motion.div
              className="p-6 rounded-xl border border-border bg-secondary/30 hover:border-primary/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold font-grotesk">
                  Contribution Graph
                </h3>
              </div>
              <div className="overflow-x-auto">
                <img
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto min-w-[600px]"
                  src="https://github-readme-activity-graph.vercel.app/graph?username=siddharthjain25&theme=black&bg_color=00000000&color=ffffff&line=ffffff&point=ffffff&hide_border=true&custom_title="
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Skills />
    </main>
  );
}
