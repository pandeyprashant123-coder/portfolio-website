"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#1a0a2e] to-[#0d0221] flex items-center justify-center py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Prashnta Pandey
            </h3>
            <p className="text-white/70 leading-relaxed">
              Software Developer specializing in Full Stack Development & AI Solutions
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://www.linkedin.com/in/prashnta-pandey-2b91211a3" 
                target="_blank"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-purple-500 hover:border-purple-500 transition-all"
              >
                <FiLinkedin className="text-xl" />
              </Link>
              <Link 
                href="https://github.com/pandeyprashant123-coder" 
                target="_blank"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-purple-500 hover:border-purple-500 transition-all"
              >
                <FaGithub className="text-xl" />
              </Link>
              <Link 
                href="https://twitter.com/PrashntaPandey" 
                target="_blank"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-purple-500 hover:border-purple-500 transition-all"
              >
                <FaXTwitter className="text-xl" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/70 hover:text-purple-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#resume" className="text-white/70 hover:text-purple-400 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/70 hover:text-purple-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/@prashntapandey" target="_blank" className="text-white/70 hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:prashntapandey@gmail.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors group"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <HiMail className="text-lg" />
                  </div>
                  <span className="text-sm">prashntapandey@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+9779840754358" 
                  className="flex items-center gap-3 text-white/70 hover:text-purple-400 transition-colors group"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <HiPhone className="text-lg" />
                  </div>
                  <span className="text-sm">+977 9840754358</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <HiLocationMarker className="text-lg" />
                  </div>
                  <span className="text-sm">Kathmandu, Nepal</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter/CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold text-white">Let&apos;s Connect</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Interested in working together or discussing tech? Feel free to reach out!
            </p>
            <Link 
              href="mailto:prashntapandey@gmail.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all"
            >
              Send Message
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Prashnta Pandey. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <span>Built with</span>
              <span className="text-purple-400">♥</span>
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
    </div>
  );
};

export default Footer;
