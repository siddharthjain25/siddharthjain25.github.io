"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

import { GridBackground } from "@/components/ui/grid-background";
import { CustomCursor } from "@/components/CustomCursor";

interface Certificate {
  title: string;
  from: String;
  completedOn: String;
  image: string;
  url: string;
}

const certificates: Certificate[] = [
  {
    title: "Web Development Bootcamp",
    image: "https://i.postimg.cc/SxNrhL3G/Web-development-bootcamp.jpg",
    url: "https://drive.google.com/file/d/1agfMeEnn6KsntUCz7r0SOI-2Eg-thq92/view",
    from: "From Udemy",
    completedOn: "Completed on 10 Febuary 2024",
  },
  {
    title: "Accenture UK - Developer and Technology Job Simulation",
    image: "https://i.postimg.cc/DwK9dNWw/accenture-forage.jpg",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20UK/3xnZEj9kfpoQKW885_Accenture%20UK_ecsJwSusswDvszhbv_1726387813150_completion_certificate.pdf",
    from: "From Forage",
    completedOn: "Completed on 15 September 2024",
  },
  {
    title: "J.P. Morgan - Software Engineering Virtual Experience",
    image: "https://i.postimg.cc/pT779cbx/J-P-Morgan.jpg",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_ecsJwSusswDvszhbv_1726993624459_completion_certificate.pdf",
    from: "From Forage",
    completedOn: "Completed on 22 September 2024",
  },
  {
    title: "AWS Certified Cloud Practitioner CLF-C02",
    image: "https://i.postimg.cc/Bv4mX9j2/awscloudpract.jpg",
    url: "https://drive.google.com/file/d/1dtDrblQPjyOm9QkwjvgcoybvymSJXY--/view?usp=sharing",
    from: "From Udemy",
    completedOn: "Completed on 14 october 2024",
  },
  {
    title: "MySQL",
    image: "https://i.postimg.cc/637bNV7P/My-SQL-certificate.jpg",
    url: "https://drive.google.com/file/d/1_FDQAuenOeoNiLNrvwhG3ZBuLWlM1acS/view?usp=sharing",
    from: "From Simplilearn",
    completedOn: "Completed on 30 January 2024",
  },
  {
    title: "Introduction to Generative AI",
    image: "https://i.postimg.cc/fRKr7Rn8/generative-ai.jpg",
    url: "https://drive.google.com/file/d/1f4hXt0mb5o4_9wOSpikYiZrsjYE7o6Sv/view?usp=sharing",
    from: "From Coursera",
    completedOn: "Completed on 27 January 2024",
  },
  {
    title: "Java 2.0",
    image: "https://i.postimg.cc/6Qp1MxBt/java2-0.jpg",
    url: "https://drive.google.com/file/d/1FL3IgdliLY5aSyxchlNUv5vpwEnECY0G/view?usp=sharing",
    from: "Universal Informatics",
    completedOn: "Completed on 11 July 2023",
  },
  {
    title: "Blockchain Builder",
    image: "https://i.postimg.cc/qMnfKrvF/fitt-iitd-certificate.jpg",
    url: "https://drive.google.com/file/d/1BpRY8Jasec3MXJZIKxaQd7LbZLc-l8K_/view?usp=sharing",
    from: "From MPSSDEGB",
    completedOn: "Completed On 15 March 2024",
  },
  {
    title: "The complete Python Pro Bootcamp",
    image: "https://i.postimg.cc/W3J8y2CL/python-pro-bootcamp.jpg",
    url: "https://drive.google.com/file/d/1OhEE04z6GmitWLBZLXJCDMXHmi-Q6O2G/view?usp=sharing",
    from: "From Udemy",
    completedOn: "Completed on 27 May 2024",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    image: "https://i.postimg.cc/ZRqjx8FR/AWS-Academy.jpg",
    url: "https://drive.google.com/file/d/1A1hIO_Ao0i2j3JltFTa8gYjT4VMmpVb0/view?usp=sharing",
    from: "From AWS Academy",
    completedOn: "Completed on 22 June 2024",
  },
];

export default function MarketplacePage() {
  return (
    <main className="bg-black text-white">
      <CustomCursor />
      <GridBackground>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold font-grotesk mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                Certifications
              </h1>
              <p className="text-lg text-muted-foreground font-mono">
                Certified in key areas of cloud computing, cybersecurity, and
                data analytics, I bring validated expertise and a commitment to
                continuous learning in the ever-evolving tech landscape.
              </p>
            </motion.div>
          </div>

          {/* Products Grid */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.url}
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 hover:border-primary/20 rounded-xl overflow-hidden transition-all duration-300">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        alt={certificate.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        height={450}
                        src={certificate.image}
                        width={800}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6 space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {certificate.title}
                        </h2>
                      </div>

                      <div>
                        <h3 className="font-medium text-sm text-white/60 mb-3">
                          {certificate.from}
                        </h3>
                      </div>

                      <div>
                        <h3 className="font-medium text-sm text-white/60 mb-3">
                          {certificate.completedOn}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div className="flex items-center gap-4">
                          <Button
                            as={Link}
                            className="px-6 py-2 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            href={certificate.url}
                            target="_blank"
                          >
                            View Certificate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </GridBackground>
    </main>
  );
}
