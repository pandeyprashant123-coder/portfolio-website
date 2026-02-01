"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const ScrollNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const container = document.querySelector('.scroll-container');
    
    if (element && container) {
      const offsetTop = element.offsetTop;
      container.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setMobileMenu(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#260C40]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Prashnta Pandey
          </motion.h1>

          <div className="hidden md:flex gap-8 items-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-white/80 hover:text-white transition-colors relative ${
                  activeSection === section.id ? "text-white" : ""
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <Link
              href="https://medium.com/@prashntapandey"
              target="_blank"
              className="text-white/80 hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white text-2xl"
          >
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#260C40] border-t border-white/10"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-white/80 hover:text-white transition-colors ${
                    activeSection === section.id ? "text-purple-400 font-semibold" : ""
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <Link
                href="https://medium.com/@prashntapandey"
                target="_blank"
                className="text-left text-white/80 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Scroll Dots Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 border-transparent scale-125"
                    : "bg-transparent border-white/30 hover:border-white"
                }`}
              />
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#260C40] text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50"
        style={{
          scaleX: (sections.findIndex((s) => s.id === activeSection) + 1) / sections.length,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default ScrollNav;
