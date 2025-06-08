"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"] });

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certificate" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] ${
        scrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : ""
      } transition-all duration-300`}
      initial={{ y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            className={`text-3xl font-bold hover:text-primary transition-colors ${dancing.className}`}
            href="/"
          >
            Siddharth Jain
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative group ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  href={link.href}
                >
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      layoutId="navbar-active"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-secondary/0 group-hover:bg-secondary/50 transition-colors -z-10" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            className="p-2 md:hidden rounded-full hover:bg-primary/10 transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu - Moved outside nav but inside header */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-background/80 backdrop-blur-lg ${
            isMobileMenuOpen
              ? "max-h-[400px] opacity-100 border-t border-border"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.header>
  );
};
