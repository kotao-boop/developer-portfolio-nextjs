"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SCRIPT = [
    "> init nexdev_agent.sh",
    "Loading core modules... [OK]",
    "> whoami",
    "I am NexDev. A creative developer operating at the intersection of logical engineering and digital art.",
    "> fetch skills --core",
    "[System]: WebGL, React ecosystem, AI Agent Integration, Rust, GLSL",
    "> status",
    "Ready for new challenges. Awaiting input..."
];

export default function TerminalEffect() {
    const [lines, setLines] = useState<{text: string, isCmd: boolean}[]>([]);
    const [cmdIndex, setCmdIndex] = useState(0);
    const [typingText, setTypingText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setHasStarted(true);
            }
        }, { threshold: 0.5 });
        
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;
        if (cmdIndex >= SCRIPT.length) return;

        const line = SCRIPT[cmdIndex];
        const isCmd = line.startsWith(">");

        if (isCmd) {
            setIsTyping(true);
            let charIdx = 0;
            setTypingText("");

            const interval = setInterval(() => {
                if (charIdx < line.length) {
                    setTypingText((prev) => prev + line.charAt(charIdx));
                    charIdx++;
                } else {
                    clearInterval(interval);
                    setIsTyping(false);
                    setLines((prev) => [...prev, { text: line, isCmd: true }]);
                    setTypingText("");
                    setTimeout(() => setCmdIndex((prev) => prev + 1), 300);
                }
            }, 30);
            return () => clearInterval(interval);
        } else {
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, { text: line, isCmd: false }]);
                setCmdIndex((prev) => prev + 1);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [cmdIndex, hasStarted]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [lines, typingText]);

    return (
        <div className="w-full max-w-3xl mx-auto bg-[#0a0a0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 mr-4" />
                <span className="text-slate-400 text-sm font-mono">nexdev_agent@2027: ~</span>
            </div>
            <div 
                ref={containerRef} 
                className="p-6 h-[300px] overflow-y-auto font-mono text-emerald-500 text-base leading-relaxed"
            >
                {lines.map((l, i) => (
                    <p key={i} className={l.isCmd ? "text-emerald-500" : "text-slate-400"}>
                        {l.text}
                    </p>
                ))}
                {isTyping && (
                    <p>
                        {typingText}
                        <span className="animate-pulse">█</span>
                    </p>
                )}
                {!isTyping && cmdIndex >= SCRIPT.length && (
                    <p>
                        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                            █
                        </motion.span>
                    </p>
                )}
            </div>
        </div>
    );
}
