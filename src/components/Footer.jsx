import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative px-6 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
            <p>© {new Date().getFullYear()} Biwash. All rights reserved.</p>
            <div className="flex gap-4">
                <a href="https://github.com/BIwashbhatarai"><Github size={16} /></a>
                <a href="https://www.linkedin.com/in/biwash-bhattarai/"><Linkedin size={16} /></a>
                <a href="mailto:biwashbhattarai352@gmail.com"><Mail size={16} /></a>
            </div>
            <p>Designed & Developed by Biwash</p>
        </footer>
    );
}