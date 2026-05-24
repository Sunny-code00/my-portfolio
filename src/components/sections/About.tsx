"use client";

import { motion } from "framer-motion";
import { Code, Server, Cloud, Terminal } from "lucide-react";

export default function About() {
  const skills = [
    "Linux",
    "Docker",
    "NGINX",
    "Java",
    "Networking",
    "DevOps",
    "Cloud",
    "GitHub",
  ];

  const cards = [
    {
      icon: <Terminal size={28} />,
      title: "Linux & Terminal",
      desc: "Learning Linux commands, shell scripting, networking, and system administration.",
    },
    {
      icon: <Server size={28} />,
      title: "DevOps Journey",
      desc: "Exploring Docker, NGINX, CI/CD concepts, and deployment workflows.",
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud & Deployment",
      desc: "Learning modern cloud infrastructure and deploying full stack applications.",
    },
    {
      icon: <Code size={28} />,
      title: "Full Stack Development",
      desc: "Building responsive websites using Next.js, React, and modern UI design.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-14 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm tracking-[0.3em] text-gray-400 mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Building My Journey
            <br />
            Into DevOps & Development
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Passionate developer currently learning DevOps, Linux, Docker,
            Cloud, Networking, and Full Stack Development. I enjoy building
            modern web experiences and understanding how scalable systems work
            behind the scenes.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-14">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-white/20 transition-all"
            >
              <div className="mb-5 text-gray-300">{card.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
