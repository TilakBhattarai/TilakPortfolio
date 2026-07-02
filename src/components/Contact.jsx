import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="relative px-6 md:px-12 py-24 max-w-5xl mx-auto">
            <Reveal>
                <SectionLabel eyebrow="Let's talk" title="Contact" />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
                <Reveal delay={100}>
                    <div className="glass rounded-2xl p-8 h-full flex flex-col gap-6">
                        <p className="text-sm opacity-70 leading-relaxed">
                            Open to internships, freelance work, and collaboration on
                            interesting projects. Feel free to reach out.
                        </p>
                        <div className="flex items-center gap-3 text-sm">
                            <Mail size={16} className="text-teal" /> biwash@example.com
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Github size={16} className="text-teal" /> github.com/biwashthegoat
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Linkedin size={16} className="text-teal" /> linkedin.com/in/biwash
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <MapPin size={16} className="text-teal" /> Biratnagar, Nepal
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={200}>
                    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-4">
                        <input
                            required
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal"
                        />
                        <input
                            required
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal"
                        />
                        <textarea
                            required
                            rows={4}
                            placeholder="Your message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal resize-none"
                        />
                        <button
                            type="submit"
                            className="glow-btn rounded-lg py-3 text-sm font-semibold flex items-center justify-center gap-2"
                        >
                            <Send size={14} /> {sent ? "Message Sent!" : "Send Message"}
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}