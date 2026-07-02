import React from "react";
import { Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { certificates } from "../data";

export default function Certificates() {
    return (
        <section id="certificates" className="relative px-6 md:px-12 py-24 max-w-5xl mx-auto">
            <Reveal>
                <SectionLabel eyebrow="Proof of work" title="Certificates" />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
                {certificates.map((c, i) => (
                    <Reveal key={c.title} delay={i * 100}>
                        <div className="glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition">
                            <div className="p-3 rounded-full mb-4 bg-amber/15">
                                <Award size={20} className="text-amber" />
                            </div>
                            <h3 className="font-semibold text-sm mb-1">{c.title}</h3>
                            <p className="text-xs opacity-60">{c.org}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}