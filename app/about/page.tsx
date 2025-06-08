"use client";

import { motion } from "framer-motion";
import {
  Github,
  Brain,
  Blocks,
  Cloud,
  Smartphone,
  Shield,
  GitBranch,
  LucideIcon,
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
    icon: Github,
    description: "Contributing to the community",
  },
  {
    name: "AI/ML",
    icon: Brain,
    description: "Machine Learning & Neural Networks",
  },
  {
    name: "Web3",
    icon: Blocks,
    description: "Blockchain & Smart Contracts",
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    description: "Scalable Infrastructure",
  },
  {
    name: "IoT",
    icon: Smartphone,
    description: "Connected Devices",
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
      {/* Interests Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
              Interests & Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">
              Areas of Interest
            </h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Technologies and domains that excite me and drive my continuous
              learning
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <interest.icon className="w-8 h-8 text-primary/80" />
                      </div>
                      <h3 className="text-xl font-bold font-grotesk mb-2">
                        {interest.name}
                      </h3>
                      <p className="text-sm font-mono text-white/50 mb-4">
                        {interest.description}
                      </p>
                      <div className="h-1 w-12 bg-primary/50 mx-auto rounded-full transform origin-center group-hover:scale-x-150 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Skills />
    </main>
  );
}
