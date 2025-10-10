"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import {
  ArrowDownToLine,
  ExternalLink,
  Music,
  Bird,
  Code2,
  Sparkles,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SpotifyWidget from "./SpotifyWidget";

const quickInfo = [
  { label: "Age", value: "21", icon: "👤" },
  { label: "Location", value: "Pune, India", icon: "📍" },
  { label: "Experience", value: "Fresher", icon: "💼" },
  { label: "Status", value: "Available", icon: "✨" },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
];

const interests = [
  { icon: Code2, label: "Coding", color: "text-blue-400" },
  { icon: Music, label: "Music", color: "text-purple-400" },
  { icon: Bird, label: "Anime", color: "text-amber-400" },
  { icon: Sparkles, label: "Design", color: "text-pink-400" },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/siddharthjain25",
    color: "hover:text-purple-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddharth25op",
    color: "hover:text-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:work@siddharth.is-a.dev",
    color: "hover:text-green-400",
  },
];

export const About = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden" id="about">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-10"
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            {/* Header */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.span
                className="inline-flex items-center gap-2 text-sm font-mono text-primary/90 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full cursor-default"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                About Me
              </motion.span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk">
                <span className="block text-muted-foreground/60 text-2xl md:text-3xl font-medium mb-3">
                  I'm a
                </span>
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto]"
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Software Engineer
                </motion.span>
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <p className="text-lg md:text-xl text-muted-foreground font-mono leading-relaxed">
                A web developer by day and professional procrastinator by night.
                I love coding almost as much as I love coming up with inventive
                ways to avoid it. Sometimes, my brain hits the pause button
                without warning, leaving me staring at the screen like a cat
                tracking a laser pointer. But hey, when the gears do start
                turning, I make the web a more interesting place—one quirky line
                of code at a time!
              </p>

              {/* Spotify Status Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <SpotifyWidget />
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  as={Link}
                  className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                  href="https://drive.google.com/file/d/1Ty7tGp1wQTCig5ceojbohK8vKE-84zPQ/view"
                  size="lg"
                  target="_blank"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download CV
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDownToLine className="h-4 w-4" />
                    </motion.div>
                  </span>
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  as={Link}
                  className="group border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  href="/projects"
                  size="lg"
                  variant="secondary"
                >
                  <span className="flex items-center gap-2">
                    View Projects
                    <motion.div
                      whileHover={{ x: 2, y: -2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            className="space-y-6 lg:sticky lg:top-24"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            {/* Profile Image Card with 3D Tilt Effect */}
            <motion.div
              className="relative group perspective-1000"
              style={{
                rotateX: isImageHovered ? rotateX : 0,
                rotateY: isImageHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => {
                setIsImageHovered(false);
                handleMouseLeave();
              }}
              onMouseMove={handleMouseMove}
            >
              <Card className="bg-gradient-to-br from-secondary/50 to-background backdrop-blur-xl border-primary/20 overflow-hidden shadow-2xl shadow-primary/10">
                <CardContent className="p-8">
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />

                  <div className="relative aspect-square rounded-2xl overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-500">
                    <Image
                      priority
                      alt="Siddharth Jain - Software Engineer"
                      className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                      height={600}
                      src="/images/logome.jpg"
                      width={600}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Scan line effect */}
                    <motion.div
                      animate={{ y: ["0%", "100%"] }}
                      className="absolute inset-x-0 h-1 bg-primary/50 blur-sm opacity-0 group-hover:opacity-100"
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Floating Badge with Pulse */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full shadow-lg shadow-primary/30 font-mono text-sm font-bold border-4 border-background cursor-pointer"
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Available
              </motion.div>
            </motion.div>

            {/* Stats Cards with Counter Animation */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "10+", label: "Projects", color: "from-blue-500" },
                {
                  value: "8+",
                  label: "Technologies",
                  color: "from-purple-500",
                },
                { value: "100%", label: "Dedication", color: "from-pink-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Card className="bg-gradient-to-br from-secondary/50 to-secondary/30 border-primary/10 hover:border-primary/30 transition-all overflow-hidden cursor-pointer">
                    <CardContent className="p-4 text-center relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0, 0.3, 0],
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} to-transparent`}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <motion.p
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        className={`text-2xl md:text-3xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r ${stat.color} to-primary/60 bg-[length:200%_auto] relative`}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-xs font-mono text-muted-foreground mt-1 relative">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Fun Fact Card with Hover Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 overflow-hidden cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      className="p-3 rounded-xl bg-primary/20 flex-shrink-0"
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="font-grotesk font-bold mb-2 text-lg group-hover:text-primary transition-colors">
                        Fun Fact
                      </h4>
                      <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                        I debug faster when listening to music. There's
                        something about a good beat that helps me spot those
                        sneaky semicolons! 🎵
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
