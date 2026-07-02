import React from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { projects } from "../data";

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative px-6 md:px-12 py-24 max-w-6xl mx-auto"
        >
            <Reveal>
                <SectionLabel eyebrow="Recent Work" title="Projects" />
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <Reveal key={p.title} delay={i * 120}>
                        <div className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1 transition duration-300">
                            <div className="h-36 flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-amber-500/20">
                                <Code2 size={32} className="text-teal-400" />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="font-semibold mb-2 text-lg">
                                    {p.title}
                                </h3>

                                <p className="text-sm opacity-70 leading-relaxed mb-4 flex-1">
                                    {p.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {p.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={p.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-medium opacity-80 hover:opacity-100 transition"
                                    >
                                        <Github size={14} />
                                        Code
                                    </a>

                                    <a
                                        href={p.demo || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-medium opacity-80 hover:opacity-100 transition"
                                    >
                                        <ExternalLink size={14} />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}