import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { timeline } from "../data";

export default function Education() {
    return (
        <section id="education" className="relative px-6 md:px-12 py-24 max-w-4xl mx-auto">
            <Reveal>
                <SectionLabel eyebrow="My journey" title="Education & Experience" />
            </Reveal>
            <div className="relative pl-8 border-l border-white/10">
                {timeline.map((t, i) => (
                    <Reveal key={t.title} delay={i * 120}>
                        <div className="relative mb-10 last:mb-0">
                            <div className="absolute -left-[41px] p-2 rounded-full glass text-amber">
                                <t.icon size={16} />
                            </div>
                            <p className="text-xs font-semibold tracking-wider uppercase mb-1 text-teal">
                                {t.year}
                            </p>
                            <h3 className="font-semibold mb-1">{t.title}</h3>
                            <p className="text-xs opacity-60 mb-2">{t.subtitle}</p>
                            <p className="text-sm opacity-70 leading-relaxed">{t.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}