"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

import { Card } from "@/components/ui/card";

const educationData = [
  {
    degree: "12th Grade",
    school: "Drashti Public School, Sanawad",
    period: "2020 - 2021",
    description:
      "Completed higher secondary education with focus on Science stream",
    skills: ["Physics", "Chemistry", "Mathematics"],
    progress: 100,
    icon: BookOpen,
  },
  {
    degree: "Bachelor of Technology",
    school: "Institute Of Engineering & Science, IPS Academy, Indore",
    period: "2021 - 2025",
    description:
      "Pursuing B.Tech in Computer Science with specialization in Software Engineering",
    skills: [
      "Algorithms",
      "Data Structures",
      "Operating System",
      "Networking",
      "DBMS",
      "Web Development",
    ],
    progress: 100,
    image: "/images/mit.png",
    icon: GraduationCap,
  },
];

export const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-24 relative overflow-hidden" id="education">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-mono text-primary/90 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </motion.span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk mb-6"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
              Academic Journey
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground font-mono max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            A timeline of my educational milestones and achievements
          </motion.p>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 origin-[0%] z-50"
          style={{ scaleX: progress }}
        />

        {/* Education Timeline */}
        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block">
            <div className="w-0.5 h-full bg-gradient-to-b from-transparent via-border to-transparent" />
            <motion.div
              className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"
              style={{
                scaleY: progress,
                transformOrigin: "top",
              }}
            />
          </div>

          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.school}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {/* Animated Timeline Node */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 hidden md:flex items-center justify-center z-20">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    whileInView={{ scale: 1 }}
                  >
                    {/* Outer pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      className="absolute inset-0 w-16 h-16 rounded-full bg-primary/30"
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Node circle */}
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 border-4 border-background shadow-lg shadow-primary/50 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    {/* Inner glow */}
                    <div className="absolute inset-2 rounded-full bg-primary/50 blur-md" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div
                  className={`relative ${isLeft ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"}`}
                >
                  <motion.div
                    transition={{ type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="relative bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-primary/20">
                      {/* Card glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Shine effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />

                      <div className="p-8 space-y-6 relative z-10">
                        {/* Header with Icon */}
                        <div className="space-y-4">
                          <div
                            className={`flex items-start gap-3 ${isLeft ? "md:flex-row-reverse md:text-right" : ""}`}
                          >
                            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <motion.h3
                                className="text-2xl md:text-3xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary group-hover:from-primary group-hover:to-primary transition-all duration-500"
                                whileHover={{ scale: 1.02 }}
                              >
                                {edu.degree}
                              </motion.h3>
                            </div>
                          </div>

                          <p className="text-lg text-primary/90 font-medium">
                            {edu.school}
                          </p>

                          {edu.description && (
                            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                              {edu.description}
                            </p>
                          )}

                          {/* Period Badge */}
                          <div
                            className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}
                          >
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-mono text-primary border border-primary/20">
                              {edu.period}
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/60 transition-all duration-500" />

                        {/* Skills */}
                        <div className="space-y-3">
                          <div
                            className={`flex items-center gap-2 text-sm font-mono text-muted-foreground uppercase tracking-wider ${isLeft ? "md:justify-end" : ""}`}
                          >
                            <Award className="w-4 h-4 text-primary" />
                            Key Subjects
                          </div>
                          <div
                            className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}
                          >
                            {edu.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skill}
                                className="px-3 py-1.5 bg-secondary/50 border border-border hover:border-primary/40 rounded-lg text-xs font-mono hover:bg-secondary hover:text-primary transition-all duration-300 cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                transition={{
                                  delay: index * 0.2 + skillIndex * 0.05 + 0.3,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                            <span>Completion</span>
                            <span className="text-primary font-bold">
                              {edu.progress}%
                            </span>
                          </div>
                          <div className="h-2 bg-secondary/50 rounded-full overflow-hidden border border-border">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-primary/60 relative overflow-hidden"
                              initial={{ width: 0 }}
                              transition={{
                                duration: 1.5,
                                delay: index * 0.2 + 0.5,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true }}
                              whileInView={{ width: `${edu.progress}%` }}
                            >
                              {/* Animated shine on progress bar */}
                              <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  ease: "linear",
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-all duration-500" />
                    </Card>
                  </motion.div>

                  {/* Connecting Line to Timeline */}
                  <motion.div
                    className={`absolute top-12 hidden md:block h-0.5 w-12 bg-gradient-to-r ${
                      isLeft
                        ? "right-0 from-primary/50 to-transparent"
                        : "left-0 from-transparent to-primary/50"
                    }`}
                    initial={{ scaleX: 0 }}
                    style={{ transformOrigin: isLeft ? "right" : "left" }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileInView={{ scaleX: 1 }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div
                  className={`hidden md:block ${isLeft ? "" : "md:col-start-1"}`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats or CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 border border-primary/30 rounded-full">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">
              <span className="text-primary font-bold">
                {educationData.length}
              </span>{" "}
              Educational Milestones Achieved
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
