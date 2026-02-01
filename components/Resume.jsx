"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSpringboot, SiMongodb, SiPostgresql, SiRedis, SiTypescript, SiJavascript, SiRemix } from "react-icons/si";
import { HiCode, HiBriefcase, HiAcademicCap } from "react-icons/hi";

const Resume = () => {
  const technologies = [
    { icon: FaJava, name: "Java", color: "#007396" },
    { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: TbBrandNextjs, name: "Next.js", color: "#ffffff" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaDocker, name: "Docker", color: "#2496ED" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: SiRemix, name: "Remix", color: "#fff" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#1a0a2e] to-[#260C40] py-20 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
          <p className="text-white/70 text-lg mb-12 max-w-3xl">
            Passionate software developer with 2+ years of experience in full-stack development. 
            Currently working on B2B Shopify apps, scalable microservices, and AI agents.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <HiCode className="text-3xl text-purple-400" />
            <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <tech.icon
                  className="text-4xl transition-all duration-300"
                  style={{ color: tech.color }}
                />
                <p className="text-white/80 text-xs text-center group-hover:text-white transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Programming Languages
              </h4>
              <p className="text-white/80">JavaScript, TypeScript, Python, Java</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Development Frameworks
              </h4>
              <p className="text-white/80">React, Spring Boot, Next.js, Node.js, Remix.js</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Tools & Technologies
              </h4>
              <p className="text-white/80">Git, Docker, AWS Lambda, API Integration, SQL, NoSQL, Redis</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Soft Skills
              </h4>
              <p className="text-white/80">Problem Solving, Team Collaboration, Data-Driven Development</p>
            </div>
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <HiBriefcase className="text-3xl text-purple-400" />
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">Software Developer</h4>
                    <p className="text-purple-400 font-medium">Smaitic Labs</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">Hybrid</span>
                </div>
                <p className="text-white/60 text-sm mb-3">July 2025 - Present</p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Developed B2B Shopify app for enterprise customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Built scalable APIs using Spring Boot microservices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Developed AI agents using RAG and MCP server</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">Backend Developer</h4>
                    <p className="text-purple-400 font-medium">Fluid and Solid LLC</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">Remote</span>
                </div>
                <p className="text-white/60 text-sm mb-3">May 2024 - Dec 2024</p>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Documented key product requirements for mobile app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Developed major components for Real Estate platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <HiAcademicCap className="text-3xl text-purple-400" />
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <h4 className="text-xl font-bold text-white mb-2">Bachelor in Computer Engineering</h4>
              <p className="text-purple-400 font-medium mb-1">Tribhuvan University, IOE, Purwanchal Campus</p>
              <p className="text-white/60 text-sm mb-3">Apr 2021 - Mar 2025 • Kathmandu, Nepal</p>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Multiple hackathon winner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Mentored junior students in technical projects</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Looking for a dedicated software developer who brings innovative solutions and delivers results? 
            I specialize in building scalable applications using modern tech stacks, from microservices to AI-powered solutions.
          </p>
          <a 
            href="mailto:prashntapandey@gmail.com" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
