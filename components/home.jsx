"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Poster from "../public/imgs/hacker.svg";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const Home = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#260C40] via-[#3d1456] to-[#260C40] overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30"
            >
              <span className="text-purple-300 text-sm">👋 Welcome to my portfolio</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Prashnta
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pandey
              </span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Software Developer specializing in Full Stack Development & AI Solutions
            </p>
            
            <p className="text-white/60 leading-relaxed">
              Building scalable applications with React, Spring Boot, and Next.js. 
              Passionate about creating AI agents and microservices architecture.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  const container = document.querySelector('.scroll-container');
                  if (element && container) {
                    container.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
              >
                Get In Touch
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  const container = document.querySelector('.scroll-container');
                  if (element && container) {
                    container.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all"
              >
                View Work
              </button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <Link
                href="https://www.linkedin.com/in/prashnta-pandey-2b91211a3"
                target="_blank"
                className="text-white/60 hover:text-purple-400 transition-all hover:scale-110"
              >
                <FiLinkedin className="text-2xl" />
              </Link>
              <Link
                href="https://github.com/pandeyprashant123-coder"
                target="_blank"
                className="text-white/60 hover:text-purple-400 transition-all hover:scale-110"
              >
                <FaGithub className="text-2xl" />
              </Link>
              <Link
                href="https://twitter.com/PrashntaPandey"
                target="_blank"
                className="text-white/60 hover:text-purple-400 transition-all hover:scale-110"
              >
                <FaXTwitter className="text-2xl" />
              </Link>
              <Link
                href="mailto:prashntapandey@gmail.com"
                className="text-white/60 hover:text-purple-400 transition-all hover:scale-110"
              >
                <HiMail className="text-2xl" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src={Poster}
                alt="Developer illustration"
                width={400}
                height={400}
                className="relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "6+", label: "Projects Completed" },
            { value: "3", label: "Hackathon Wins" },
            { value: <HiLocationMarker className="inline text-2xl" />, label: "Kathmandu, Nepal" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
