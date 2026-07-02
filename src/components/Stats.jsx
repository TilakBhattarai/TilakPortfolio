import React from "react";
import { stats } from "../data";
import Counter from "./Counter";

export default function Stats() {
    return (
        <section className="relative px-6 md:px-12 py-20 max-w-5xl mx-auto">
            <div className="glass rounded-3xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((s) => (
                    <div key={s.label}>
                        <p className="text-3xl md:text-4xl font-extrabold mb-1 font-display">
                            <Counter target={s.value} />
                        </p>
                        <p className="text-xs opacity-60">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}