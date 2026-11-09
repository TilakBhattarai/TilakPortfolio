
import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { roles } from "../data";
import { useTypingEffect } from "../hooks/useTypingEffect";
import Reveal from "./Reveal";

export default function Hero({ scrollTo }) {
    const displayText = useTypingEffect(roles);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
        >
            {/* Background Orbs */}
            <div className="orb w-96 h-96 bg-teal top-[-100px] left-[-100px] animate-pulseGlow absolute rounded-full blur-3xl opacity-30" />

            <div
                className="orb w-80 h-80 bg-amber top-[200px] right-[-120px] animate-pulseGlow absolute rounded-full blur-3xl opacity-30"
                style={{ animationDelay: "2s" }}
            />

            <Reveal>
                <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4 text-teal-400">
                    Hi, my name is
                </p>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-display">
                    Tilak
                </h1>

                <div className="h-10 mb-6">
                    <span className="text-xl md:text-2xl font-semibold gradient-text">
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </span>
                </div>

                <p className="max-w-xl mx-auto text-base md:text-lg opacity-70 mb-10">
                    BIT student focused on building full-stack applications
                    with Python, Django REST Framework, React, and PostgreSQL,
                    while developing a strong foundation in AI/ML engineering.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mb-10">
                    <button
                        onClick={() => scrollTo("projects")}
                        className="glow-btn px-7 py-3 rounded-full font-semibold text-sm"
                    >
                        View Projects
                    </button>

                </div>

                {/* Social Links */}
                <div className="flex gap-5 justify-center">
                    <a
                        href="https://github.com/TilakBhattarai"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="glass p-3 rounded-full hover:scale-110 transition text-teal-400"
                    >
                        <Github size={18} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/biwash-bhattarai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="glass p-3 rounded-full hover:scale-110 transition text-teal-400"
                    >
                        <Linkedin size={18} />
                    </a>

                    <a
                        href="mailto:biwashbhattarai352@gmail.com"
                        aria-label="Email"
                        className="glass p-3 rounded-full hover:scale-110 transition text-teal-400"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
