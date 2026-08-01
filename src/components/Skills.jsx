import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { skillGroups } from "../data";

export default function Skills() {
    return (
        <section id="skills" className="relative px-6 md:px-12 py-24 max-w-6xl mx-auto">
            <Reveal>
                <SectionLabel eyebrow="What I work with" title="Skills" />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
                {skillGroups.map((group, gi) => (
                    <Reveal key={group.title} delay={gi * 100}>
                        <div className="glass rounded-2xl p-7 h-full">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2 rounded-lg bg-amber/15">
                                    <group.icon size={18} className="text-amber" />
                                </div>
                                <h3 className="font-semibold">{group.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 opacity-80"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}