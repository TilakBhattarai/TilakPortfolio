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
                            <div className="flex flex-col gap-4">
                                {group.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-xs mb-1.5 opacity-80">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                                            <div
                                                className="skill-bar-fill h-full rounded-full"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}