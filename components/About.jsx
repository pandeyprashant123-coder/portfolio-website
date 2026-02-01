"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#260C40] to-[#1a0a2e] flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-12"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert">
              <p className="text-white/80 text-lg leading-relaxed">
                My name is <span className="text-white font-semibold">Prashnta Pandey</span>, and I am from Kathmandu, Nepal. I am currently studying at IOE, Purwanchal Campus, pursuing a Bachelor's degree in Computer Engineering, expected to graduate in March 2025.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                As a passionate software developer currently working as a trainee at <span className="text-purple-400 font-semibold">Smaitic Labs</span>, I specialize in building scalable B2B applications and AI agents. I have extensive experience with React, Spring Boot, Next.js, and modern technologies like Docker and AWS Lambda.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                My journey includes multiple hackathon victories, developing innovative solutions like medicine detection apps using OCR and NER, e-commerce platforms for farmers, and AI-integrated platforms for accessibility.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                I thrive on solving complex problems with data-driven approaches and delivering results through cutting-edge technology. Whether it's developing microservices architectures or implementing RAG-based AI agents, I am committed to excellence and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <h3 className="text-purple-400 font-semibold mb-1">Education</h3>
                <p className="text-white/80 text-sm">IOE, Purwanchal Campus</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <h3 className="text-purple-400 font-semibold mb-1">Current Role</h3>
                <p className="text-white/80 text-sm">Software Developer</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <h3 className="text-purple-400 font-semibold mb-1">Location</h3>
                <p className="text-white/80 text-sm">Kathmandu, Nepal</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <h3 className="text-purple-400 font-semibold mb-1">Interests</h3>
                <p className="text-white/80 text-sm">AI, Full Stack, Travel</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto w-fit">
                <Image
                  src="/imgs/Prashnta.png"
                  alt="Prashnta Pandey"
                  height={400}
                  width={400}
                  className="rounded-2xl"
                />
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {['Innovation', 'Excellence', 'Continuous Learning', 'Problem Solving', 'Team Collaboration'].map((value, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-white/80 text-sm">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
