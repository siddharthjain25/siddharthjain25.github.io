import React, { useState } from "react";
import {
  Calendar,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certificate = [
    {
      title: "Web Development Bootcamp",
      from: "From Udemy",
      mascot: "📘",
      completedOn: "Completed on 10 Febuary 2024",
      link: "https://drive.google.com/file/d/1agfMeEnn6KsntUCz7r0SOI-2Eg-thq92/view",
    },
    {
      title: "Accenture UK - Developer and Technology Job Simulation",
      from: "From Forage",
      mascot: "📗",
      completedOn: "Completed on 15 September 2024",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20UK/3xnZEj9kfpoQKW885_Accenture%20UK_ecsJwSusswDvszhbv_1726387813150_completion_certificate.pdf",
    },
    {
      title: "J.P. Morgan - Software Engineering Virtual Experience",
      from: "From Forage",
      mascot: "📘",
      completedOn: "Completed on 22 September 2024",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_ecsJwSusswDvszhbv_1726993624459_completion_certificate.pdf",
    },
    {
      title: "AWS Certified Cloud Practitioner CLF-C02",
      from: "From Forage",
      mascot: "📗",
      completedOn: "Completed on 14 october 2024",
      link: "https://drive.google.com/file/d/1dtDrblQPjyOm9QkwjvgcoybvymSJXY--/view?usp=sharing",
    },
    {
      title: "MySQL",
      from: "From Simplilearn",
      mascot: "📘",
      completedOn: "Completed on 30 January 2024",
      link: "https://drive.google.com/file/d/1_FDQAuenOeoNiLNrvwhG3ZBuLWlM1acS/view?usp=sharing",
    },
    {
      title: "Introduction to Generative AI",
      from: "From Coursera",
      mascot: "📗",
      completedOn: "Completed on 27 January 2024",
      link: "https://drive.google.com/file/d/1f4hXt0mb5o4_9wOSpikYiZrsjYE7o6Sv/view?usp=sharing",
    },
    {
      title: "Java 2.0",
      from: "Universal Informatics",
      mascot: "📘",
      completedOn: "Completed on 11 July 2023",
      link: "https://drive.google.com/file/d/1FL3IgdliLY5aSyxchlNUv5vpwEnECY0G/view?usp=sharing",
    },
    {
      title: "Blockchain Builder",
      from: "From MPSSDEGB",
      mascot: "📗",
      completedOn: "Completed On 15 March 2024",
      link: "https://drive.google.com/file/d/1BpRY8Jasec3MXJZIKxaQd7LbZLc-l8K_/view?usp=sharing",
    },
    {
      title: "The complete Python Pro Bootcamp",
      from: "From Udemy",
      mascot: "📘",
      completedOn: "Completed On 27 May 2024",
      link: "https://drive.google.com/file/d/1OhEE04z6GmitWLBZLXJCDMXHmi-Q6O2G/view?usp=sharing",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      from: "From AWS Academy",
      mascot: "📗",
      completedOn: "Completed On 22 June 2024",
      link: "https://drive.google.com/file/d/1A1hIO_Ao0i2j3JltFTa8gYjT4VMmpVb0/view?usp=sharing",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificate.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-4 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.from}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.completedOn}
                  </p>
                  <a
                    href={edu.link}
                    className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                    target="_blank"
                  >
                    <span className="block w-full px-6 sm:px-8 py-3 sm:py-1 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                      <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                        <span>View</span>
                        <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"></i>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
