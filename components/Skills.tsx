"use client";

import { motion } from "framer-motion";
import {
  SiAmazonwebservices,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiIntellijidea,
  SiLeetcode,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPycharm,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";

import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  {
    name: "React",
    icon: <SiReact className="w-8 h-8" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="w-8 h-8" />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="w-8 h-8" />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="w-8 h-8" />,
  },
  {
    name: "NodeJS",
    icon: <SiNodedotjs className="w-8 h-8" />,
  },
  {
    name: "Python",
    icon: <SiPython className="w-8 h-8" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-8 h-8" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-8 h-8" />,
  },
  {
    name: "AWS",
    icon: <SiAmazonwebservices className="w-8 h-8" />,
  },
  {
    name: "Linux",
    icon: <SiLinux className="w-8 h-8" />,
  },
  {
    name: "VScode",
    icon: <SiVscodium className="w-8 h-8" />,
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode className="w-8 h-8" />,
  },
  {
    name: "Pycharm",
    icon: <SiPycharm className="w-8 h-8" />,
  },
  {
    name: "Idea",
    icon: <SiIntellijidea className="w-8 h-8" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-8 h-8" />,
  },
  {
    name: "RaspberryPi",
    icon: <SiRaspberrypi className="w-8 h-8" />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="w-8 h-8" />,
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="w-8 h-8" />,
  },
];

export const Skills = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="container">
        <div className="space-y-20">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.span
              className="inline-block text-sm font-mono text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              Technical Arsenal
            </motion.span>
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk mb-6"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                Skills & Technologies
              </span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Building modern, scalable solutions with cutting-edge technologies
            </motion.p>
          </motion.div>

          {/* Enhanced Skills Grid with Stagger */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Card className="group relative h-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                  {/* Glassmorphism Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                  </div>

                  <CardContent className="relative p-6 text-center h-full flex flex-col items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:border-primary/40"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                    </motion.div>

                    <h3 className="text-lg font-bold font-grotesk mb-2 group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Animated Progress Bar */}
                    <motion.div
                      className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary via-blue-500 to-primary rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
