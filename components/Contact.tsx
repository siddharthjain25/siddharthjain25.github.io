"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Input, Textarea } from "@heroui/react";
import { useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const ContactSuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-background via-background to-primary/5 rounded-2xl w-full max-w-lg p-8 border border-primary/30 relative overflow-hidden shadow-2xl shadow-primary/20"
            exit={{ scale: 0.9, opacity: 0 }}
            initial={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Success Icon with Animation */}
            <div className="relative flex justify-center mb-6">
              <motion.div
                animate={{ scale: [0, 1.2, 1] }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/40"
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                <motion.svg
                  animate={{ pathLength: 1 }}
                  className="w-10 h-10 text-primary"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  stroke="currentColor"
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                  />
                </motion.svg>
              </motion.div>
            </div>

            {/* Success Message */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="relative text-center mb-8"
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold font-grotesk mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
                Message Sent Successfully!
              </h3>
              <p className="text-muted-foreground font-mono text-lg">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </motion.div>

            {/* Timeline Indicators with Stagger Animation */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="relative mb-8"
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-5 text-center border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Response Time
                    </p>
                  </div>
                  <p className="font-grotesk text-lg font-bold text-primary">
                    24-48 hours
                  </p>
                </div>
                <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-5 text-center border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Status
                    </p>
                  </div>
                  <p className="font-grotesk text-lg font-bold text-primary">
                    Processing
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Close Button */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                className="w-full group relative overflow-hidden"
                size="lg"
                variant="primary"
                onClick={onClose}
              >
                <span className="relative z-10">Close</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Contact = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9cd2c872-1058-4246-9d85-29a341936fe1",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccessModalOpen(true);
        formRef.current?.reset();
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      return error;
    } finally {
      setIsSubmitting(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Enhanced Background with Gradient Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.05])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.05])_1px,transparent_1px)] bg-[size:4rem_4rem] dark:opacity-20 opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm border border-primary/20 mb-6"
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open for opportunities
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Fill out the form below and I&apos;ll get
              back to you within{" "}
              <span className="text-primary font-semibold">24-48 hours</span>.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            {/* Left Column - Contact Form */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Quick Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full border-primary/10 hover:border-primary/30 transition-all bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                          Email
                        </h3>
                        <p className="font-grotesk text-sm font-medium break-all">
                          work@siddharth.is-a.dev
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full border-primary/10 hover:border-primary/30 transition-all bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-sm">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                          <path
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                          Location
                        </h3>
                        <p className="font-grotesk text-sm font-medium">
                          Pune, India
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Main Contact Form */}
              <Card className="border-primary/20 shadow-xl shadow-primary/5 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader className="space-y-2 pb-6">
                  <CardTitle className="text-2xl font-grotesk">
                    Send Me a Message
                  </CardTitle>
                  <CardDescription className="text-base font-mono">
                    Tell me about your project and requirements
                  </CardDescription>
                </CardHeader>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          classNames={{
                            input: "bg-background dark:bg-background",
                            label:
                              "text-foreground dark:text-foreground font-mono text-sm",
                            inputWrapper: `border-border hover:border-primary/50 transition-colors ${errors.name ? "border-red-500" : ""}`,
                          }}
                          label="Name"
                          name="name"
                          placeholder="John Doe"
                          radius="lg"
                          type="text"
                          value={formData.name}
                          variant="bordered"
                          onChange={handleInputChange}
                        />
                        {errors.name && (
                          <motion.p
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-xs mt-2 font-mono flex items-center gap-1"
                            initial={{ opacity: 0, y: -5 }}
                          >
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                clipRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                fillRule="evenodd"
                              />
                            </svg>
                            {errors.name}
                          </motion.p>
                        )}
                      </div>
                      <div>
                        <Input
                          classNames={{
                            input: "bg-background dark:bg-background",
                            label:
                              "text-foreground dark:text-foreground font-mono text-sm",
                            inputWrapper: `border-border hover:border-primary/50 transition-colors ${errors.email ? "border-red-500" : ""}`,
                          }}
                          label="Email"
                          name="email"
                          placeholder="john@example.com"
                          radius="lg"
                          type="email"
                          value={formData.email}
                          variant="bordered"
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <motion.p
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-xs mt-2 font-mono flex items-center gap-1"
                            initial={{ opacity: 0, y: -5 }}
                          >
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                clipRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                fillRule="evenodd"
                              />
                            </svg>
                            {errors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Textarea
                        classNames={{
                          input: "bg-background dark:bg-background",
                          label:
                            "text-foreground dark:text-foreground font-mono text-sm",
                          inputWrapper: `border-border hover:border-primary/50 transition-colors ${errors.message ? "border-red-500" : ""}`,
                        }}
                        label="Message"
                        minRows={6}
                        name="message"
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                        radius="lg"
                        value={formData.message}
                        variant="bordered"
                        onChange={handleInputChange}
                      />
                      {errors.message && (
                        <motion.p
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-2 font-mono flex items-center gap-1"
                          initial={{ opacity: 0, y: -5 }}
                        >
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              clipRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              fillRule="evenodd"
                            />
                          </svg>
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Character Counter */}
                    <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                      <span>All fields are required</span>
                      <span>{formData.message.length} characters</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full group relative overflow-hidden"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      size="lg"
                      type="submit"
                      variant="primary"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <>
                                className=&quot;opacity-25&quot;
                                cx=&quot;12&quot; cy=&quot;12&quot;
                                r=&quot;10&quot; stroke=&quot;currentColor&quot;
                                strokeWidth=&quot;4&quot;4&quot;
                              </>
                              <path
                                className="opacity-75"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                fill="currentColor"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg
                              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                              />
                            </svg>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>

            {/* Right Column - Social & Additional Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Why Work With Me */}
              <Card className="border-primary/20 shadow-lg bg-gradient-to-br from-secondary/30 to-background">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-grotesk font-bold mb-6 flex items-center gap-2">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                    Why Work With Me?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: (
                          <path
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        ),
                        title: "Fast Response",
                        desc: "I reply within 24-48 hours, usually sooner",
                      },
                      {
                        icon: (
                          <path
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        ),
                        title: "Quality Work",
                        desc: "Clean code with modern best practices",
                      },
                      {
                        icon: (
                          <path
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        ),
                        title: "On-Time Delivery",
                        desc: "Committed to meeting deadlines",
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/30 transition-colors group"
                        whileHover={{ x: 4 }}
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {item.icon}
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-grotesk font-semibold mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground font-mono">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-primary/20 shadow-lg bg-gradient-to-br from-background to-secondary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-grotesk font-bold mb-6">
                    Let&apos;s Connect
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        name: "GitHub",
                        url: "https://github.com/siddharthjain25",
                        icon: (
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                        ),
                      },
                      {
                        name: "LinkedIn",
                        url: "https://www.linkedin.com/in/siddharth25op",
                        icon: (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        ),
                      },
                      {
                        name: "Twitter",
                        url: "https://twitter.com/siddharth25op",
                        icon: (
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        ),
                      },
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 transition-all group"
                        href={social.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {social.icon}
                            </svg>
                          </div>
                          <span className="font-mono font-medium">
                            {social.name}
                          </span>
                        </div>
                        <svg
                          className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <ContactSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </section>
  );
};
