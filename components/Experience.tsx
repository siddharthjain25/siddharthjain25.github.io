import { motion } from "framer-motion";
import { Card, CardBody, Chip, Progress } from "@heroui/react";

const experienceData = [
  {
    role: "React Intern",
    company: "Indvibe Infotech Pvt Ltd",
    period: "May 2023 - July 2023",
    location: "Indore, India",
    description: "",
    achievements: [""],
    skills: [""],
    color: "bg-[#111111]",
    progress: 95,
  },
];

export const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="experience">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block mb-4">
            <motion.span
              className="text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              Experience
            </motion.span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Professional Journey
          </h2>
          <p className="text-muted-foreground/80 font-mono max-w-2xl mx-auto">
            Building and scaling solutions at industry-leading tech companies
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card
                className={`${exp.color} border border-white/5 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm shadow-2xl`}
                style={{
                  boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
                }}
              >
                <CardBody className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-4">
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-primary/90">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-white/50 font-mono mt-2">
                            <span>{exp.period}</span>
                            <span className="text-primary/30">•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-white/50">
                              Experience Level
                            </span>
                            <span className="text-primary/80">
                              {exp.progress}%
                            </span>
                          </div>
                          <Progress
                            className="h-1"
                            classNames={{
                              track: "bg-white/5",
                              indicator:
                                "bg-gradient-to-r from-primary/80 to-primary/60",
                            }}
                            value={exp.progress}
                          />
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Chip
                              key={skill}
                              className="bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 transition-colors"
                              variant="flat"
                            >
                              {skill}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="lg:col-span-8">
                      <p className="text-white/70 leading-relaxed mb-8">
                        {exp.description}
                      </p>

                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, x: 0 }}
                          >
                            <span className="mt-1.5">
                              <svg
                                className="w-4 h-4 text-primary/80"
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
                            </span>
                            <span className="text-white/70">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
