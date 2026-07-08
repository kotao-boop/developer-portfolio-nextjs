"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Database, Network } from "lucide-react";
import CanvasBackground from "@/components/CanvasBackground";
import TerminalEffect from "@/components/TerminalEffect";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-200 selection:bg-cyan-500/30 overflow-hidden relative font-sans">
      <CanvasBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712]/80 to-[#030712] pointer-events-none -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center z-10"
        >
          <div className="relative inline-block mb-6">
            <h1 
              className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 glitch"
              data-text="LIVING DESIGN"
            >
              LIVING DESIGN
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide mb-12">
            The 2027 standard for interactive portfolios. We break the laws of digital gravity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-4xl mx-auto rounded-full z-10"
        >
          {/* Using High-Quality Unsplash Fallback as requested because API quota was hit */}
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-12 relative group">
            <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
            <img 
              src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop" 
              alt="NexDev Avatar" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
          </div>
        </motion.div>
      </section>

      {/* Terminal Section */}
      <section className="relative py-24 px-4 bg-black/40 backdrop-blur-sm border-y border-white/5 z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              <span className="text-cyan-500">{"// "}</span>System Diagnostics
            </h2>
            <TerminalEffect />
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section className="relative py-32 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-20 text-white"
          >
            Featured Architectures
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop" alt="NeuroSync AI" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-cyan-400 w-6 h-6" />
                  <span className="text-cyan-400 font-mono text-sm">PROJ_01</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">NeuroSync AI</h3>
                <p className="text-slate-400">Quantum-inspired neural networks for real-time data analysis.</p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-fuchsia-500/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop" alt="Decentral Vault" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <Network className="text-fuchsia-400 w-6 h-6" />
                  <span className="text-fuchsia-400 font-mono text-sm">PROJ_02</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Decentral Vault</h3>
                <p className="text-slate-400 text-sm">Web3 storage protocols.</p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-indigo-500/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" alt="CyberData Dash" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="text-indigo-400 w-6 h-6" />
                  <span className="text-indigo-400 font-mono text-sm">PROJ_03</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">CyberData Dash</h3>
                <p className="text-slate-400 text-sm">High-frequency trading visualizations.</p>
              </div>
            </motion.div>

            {/* Project 4 - Info Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2 relative group rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-900/40 to-black backdrop-blur-xl flex flex-col justify-center p-12 hover:border-white/30 transition-colors"
            >
              <Terminal className="text-white w-12 h-12 mb-6 opacity-50" />
              <h3 className="text-3xl font-bold mb-4">Want to initiate a connection?</h3>
              <p className="text-slate-400 mb-8 max-w-lg">
                Our servers are currently accepting new handshakes. Let's build the future of the web together.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold w-fit hover:bg-cyan-400 hover:scale-105 transition-all">
                Initialize Contact Sequence
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 font-mono text-sm border-t border-white/5 relative z-10 bg-black/60 backdrop-blur-md">
        <p>© 2027 NexDev Architectures. Gravity Disabled.</p>
      </footer>
    </main>
  );
}
