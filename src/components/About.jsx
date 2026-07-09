import React from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
    return (
        <section
            id="about"
            className="relative px-6 md:px-12 lg:px-16 py-28 max-w-7xl mx-auto"
        >
            <Reveal>
                <SectionLabel eyebrow="Get to know me" title="About Me" />
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-10 items-stretch mt-12">
                <Reveal delay={100}>
                    <div className="glass rounded-3xl p-10 md:p-12 min-h-[360px] flex flex-col">
                        <h3 className="text-2xl font-bold text-teal mb-6">
                            Who I Am
                        </h3>

                        <p className="text-base md:text-lg leading-8 text-gray-300">
                            I'm a BIT student who enjoys building real,
                            functional web applications rather than just
                            following tutorials. I'm self-taught for the most
                            part, learning by building projects, debugging my
                            own mistakes, and figuring things out along the way.
                            I care about writing clean code and understanding
                            how things actually work under the hood.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="glass rounded-3xl p-10 md:p-12 min-h-[360px] flex flex-col">
                        <h3 className="text-2xl font-bold text-amber mb-6">
                            Where I'm Headed
                        </h3>

                        <p className="text-base md:text-lg leading-8 text-gray-300">
                            Right now, I'm deepening my backend skills with
                            Django, having already built projects with React and
                            Tailwind CSS. I practice Data Structures &
                            Algorithms consistently to strengthen my
                            problem-solving, and I'm steadily working toward
                            becoming an AI/ML engineer.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}