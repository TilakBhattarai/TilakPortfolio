import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { timeline } from "../data";

export default function Education() {
    return (
        <section
            id="education"
            className="relative px-6 md:px-12 py-24 max-w-4xl mx-auto"
        >
            <Reveal>
                <SectionLabel eyebrow="My Journey" title="Education & Experience" />
            </Reveal>

            <div className="relative pl-10 border-l border-white/10 space-y-12">
                {timeline.map((t, i) => (
                    <Reveal key={t.title} delay={i * 120}>
                        <div className="relative">

                            {/* ICON */}
                            <div className="absolute -left-[42px] top-1 p-2 rounded-full glass text-teal">
                                <t.icon size={16} />
                            </div>

                            {/* YEAR */}
                            <p className="text-[11px] font-semibold tracking-widest uppercase text-teal mb-1">
                                {t.year}
                            </p>

                            {/* TITLE */}
                            <h3 className="font-semibold text-lg mb-1 leading-snug">
                                {t.title}
                            </h3>

                            {/* SUBTITLE */}
                            <p className="text-xs opacity-60 mb-2">
                                {t.subtitle}
                            </p>

                            {/* DESCRIPTION */}
                            <p className="text-sm opacity-70 leading-relaxed max-w-xl">
                                {t.desc}
                            </p>

                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}