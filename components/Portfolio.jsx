"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import projects from "./projects.json";

const Card = ({ img, link, clink, name, description, tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        {img && (
          <>
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#260C40] via-transparent to-transparent opacity-60"></div>
          </>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {name}
        </h3>
        
        <p className="text-white/70 leading-relaxed">{description}</p>
        
        {tech && (
          <div className="flex flex-wrap gap-2">
            {tech.split(", ").map((t, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-3 pt-2">
          {link && (
            <Link 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <HiExternalLink /> Demo
            </Link>
          )}
          {clink && (
            <Link 
              href={clink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all"
            >
              <HiCode /> Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#260C40] to-[#1a0a2e] py-20 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
          <p className="text-white/70 text-lg max-w-3xl">
            From hackathon victories to production applications - showcasing innovative solutions 
            in AI, web development, and social impact technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              index={index}
              img={project.img}
              link={project.link}
              name={project.name}
              clink={project.clink}
              description={project.description}
              tech={project.tech}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link 
            href="https://github.com/pandeyprashant123-coder" 
            target="_blank"
            className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all"
          >
            View More on GitHub →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
