"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownToLine, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react"; // <-- Added imports

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickInfo = [
  { label: "Age", value: "21" },
  { label: "Location", value: "Pune, India" },
  { label: "Experience", value: "Fresher" },
];

// Custom hook to fetch Spotify currently playing song (same as before)
const useSpotify = (refreshInterval = 30000) => {
  const [track, setTrack] = useState(null);
  // Corrected: Explicitly type the state as string | null
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        // Note: Remember to use a public URL for production
        const response = await fetch("https://spot.sylveon.live/now-playing");
        if (response.status === 204 || response.status > 400) {
          setTrack(null);
          // Set error back to null if the request is successful but no track is playing
          setError(null);
          return;
        }
        const data = await response.json();
        setTrack(data);
        setError(null); // Clear any previous errors on success
      } catch (err) {
        // Corrected: The value passed to setError is now a string, which is a valid type
        setError("Failed to fetch Spotify data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { track, isLoading, error };
};

export const About = () => {
  // 1. Call the hook to get Spotify data
  const { track, isLoading, error } = useSpotify();

  // 2. Helper function to render the status safely
  const renderListeningStatus = () => {
    if (isLoading) {
      return "whatever is on the radio.";
    }
    // Corrected: Add a null or undefined check for 'track'
    if (error || !track) {
      return "a bit of silence.";
    }
    return `"${track.title}" by ${track.artist}.`;
  };

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-4">
              <motion.span
                className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                About Me
              </motion.span>
              <motion.h2
                className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Software Engineer
              </motion.h2>
            </div>

            <div className="space-y-4">
              {/* Main bio paragraph */}
              <motion.p
                className="text-lg font-mono text-white/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                A web developer by day and professional procrastinator by night.
                I love coding almost as much as I love coming up with inventive
                ways to avoid it. Sometimes, my brain hits the pause button
                without warning, leaving me staring at the screen like a cat
                tracking a laser pointer. But hey, when the gears do start
                turning, I make the web a more interesting place—one quirky line
                of code at a time!
              </motion.p>
              {/* 3. Display the Spotify status in its own paragraph */}
              <motion.p
                className="text-lg font-mono text-white/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Currently, I'm listening to <b>{renderListeningStatus()}</b>
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-sm font-mono text-primary/80">
                    {info.label}
                  </p>
                  <p className="text-lg font-grotesk font-bold text-white/90">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Button
                as={Link}
                className="bg-white text-black hover:bg-white/90 transition-all duration-300 group"
                href="https://drive.google.com/file/d/1Ty7tGp1wQTCig5ceojbohK8vKE-84zPQ/view"
                size="lg"
                target="_blank"
              >
                Download CV
                <ArrowDownToLine className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </Button>
              <Button
                as={Link}
                className="bg-transparent border border-white/10 hover:bg-white/5 transition-all duration-300 group"
                href="/projects"
                size="lg"
                variant="secondary"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Card className="bg-black/50 backdrop-blur-xl border-white/10 overflow-hidden group">
              <CardContent className="p-8">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    priority
                    alt="Profile"
                    className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    height={500}
                    src="/images/logome.jpg"
                    width={500}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
