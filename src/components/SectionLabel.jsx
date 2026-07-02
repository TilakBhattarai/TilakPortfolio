import React from "react";

export default function SectionLabel({ eyebrow, title }) {
    return (
        <div className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-3 text-teal">
                {eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-ink">
                {title}
            </h2>
            <div className="h-1 w-16 mx-auto mt-4 rounded-full bg-gradient-to-r from-teal to-amber" />
        </div>
    );
}