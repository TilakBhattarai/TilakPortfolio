import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
    return (
        <section id="about" className="relative px-6 md:px-12 py-24 max-w-5xl mx-auto">
            <Reveal>
                <SectionLabel eyebrow="Get to know me" title="About Me" />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
                <Reveal delay={100}>
                    <div className="glass rounded-2xl p-8 h-full">
                        <h3 className="font-semibold text-lg mb-3 text-teal">Who I Am</h3>
                        <p className="opacity-75 text-sm leading-relaxed">
                            I'm a first-year BCA student at Green Peace Lincoln College,
                            based in Nepal. I enjoy building things end to end — from
                            messy first drafts to polished, working products — and I
                            learn best by actually shipping projects rather than only
                            reading theory.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={200}>
                    <div className="glass rounded-2xl p-8 h-full">
                        <h3 className="font-semibold text-lg mb-3 text-amber">
                            Where I'm Headed
                        </h3>
                        <p className="opacity-75 text-sm leading-relaxed">
                            My goal is to grow into a fullstack and AI/ML engineer, with
                            freelancing as a side path along the way. I'm currently deep
                            in React, Django, and daily DSA practice, with machine
                            learning next on the roadmap.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}