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
    <section className="py-20 bg-muted/5" id="skills">
      <div className="container">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.span
              className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Skills
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Technical Skills
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Proficient in modern web technologies and development practices,
              with a focus on creating scalable and maintainable solutions.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
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
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold font-grotesk mb-2">
                        {skill.name}
                      </h3>
                      <div className="h-1 w-12 bg-primary/50 mx-auto rounded-full transform origin-center group-hover:scale-x-150 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
