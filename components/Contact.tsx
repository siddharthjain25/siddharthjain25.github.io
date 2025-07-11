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
        >
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            className="bg-black/90 rounded-xl w-full max-w-lg p-8 border border-primary/20 relative overflow-hidden"
            exit={{ scale: 0.9, opacity: 0 }}
            initial={{ scale: 0.9, opacity: 0 }}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50" />

            {/* Success Icon */}
            <div className="relative flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <motion.div
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Success Message */}
            <div className="relative text-center mb-8">
              <h3 className="text-2xl font-bold font-grotesk mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Message Sent Successfully!
              </h3>
              <p className="text-muted-foreground font-mono">
                Thank you for reaching out. I{"'"}ll get back to you within
                24-48 hours.
              </p>
            </div>

            {/* Timeline Indicators */}
            <div className="relative mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-sm font-mono text-muted-foreground mb-1">
                    Response Time
                  </p>
                  <p className="font-grotesk text-primary">24-48 hours</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-4 text-center">
                  <p className="text-sm font-mono text-muted-foreground mb-1">
                    Status
                  </p>
                  <p className="font-grotesk text-primary">Processing</p>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="relative">
              <Button
                className="w-full"
                size="lg"
                variant="primary"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
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
    // Clear error when user starts typing
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

  return (
    <section className="relative py-20 overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.05])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.05])_1px,transparent_1px)] bg-[size:4rem_4rem] dark:opacity-20 opacity-10" />
      </div>

      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">
              Let{"'"}s Work Together
            </h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Have a project in mind? Fill out the form below and I{"'"}ll get
              back to you within 24-48 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg
                        className="w-6 h-6"
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
                    <div>
                      <h3 className="text-sm font-mono text-muted-foreground">
                        Email
                      </h3>
                      <p className="font-grotesk">work@siddharth.is-a.dev</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-xl bg-secondary">
                      <svg
                        className="w-6 h-6"
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
                    <div>
                      <h3 className="text-sm font-mono text-muted-foreground">
                        Location
                      </h3>
                      <p className="font-grotesk">Pune, India</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                  <CardDescription>
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
                            label: "text-foreground dark:text-foreground",
                            inputWrapper: `border-border ${errors.name ? "border-red-500" : ""}`,
                          }}
                          label="Name"
                          name="name"
                          placeholder="Your name"
                          radius="lg"
                          type="text"
                          value={formData.name}
                          variant="bordered"
                          onChange={handleInputChange}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Input
                          classNames={{
                            input: "bg-background dark:bg-background",
                            label: "text-foreground dark:text-foreground",
                            inputWrapper: `border-border ${errors.email ? "border-red-500" : ""}`,
                          }}
                          label="Email"
                          name="email"
                          placeholder="your@email.com"
                          radius="lg"
                          type="email"
                          value={formData.email}
                          variant="bordered"
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Textarea
                        classNames={{
                          input: "bg-background dark:bg-background",
                          label: "text-foreground dark:text-foreground",
                          inputWrapper: `border-border ${errors.message ? "border-red-500" : ""}`,
                        }}
                        label="Description"
                        minRows={4}
                        name="message"
                        placeholder="Tell me about your project, goals, and any specific requirements."
                        radius="lg"
                        value={formData.message}
                        variant="bordered"
                        onChange={handleInputChange}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                      size="lg"
                      type="submit"
                      variant="primary"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>

            {/* Map and Social Links */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              {/* Social Links Below Map */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-grotesk font-bold mb-4">
                    Let{"'"}s Connect
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <a
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border transition-colors group"
                      href="https://github.com/siddharthjain25"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                      <span className="font-mono text-sm group-hover:text-foreground">
                        GitHub
                      </span>
                    </a>
                    <a
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border transition-colors group"
                      href="https://www.linkedin.com/in/siddharth25op"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="font-mono text-sm group-hover:text-foreground">
                        LinkedIn
                      </span>
                    </a>
                    <a
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border transition-colors group"
                      href="https://twitter.com/siddharth25op"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="font-mono text-sm group-hover:text-foreground">
                        Twitter
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
