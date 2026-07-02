import React from "react";
import { ArrowUp } from "lucide-react";
import { useScrolledPast } from "../hooks/useScrolledPast";

export default function BackToTop() {
    const show = useScrolledPast(500);

    if (!show) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="glow-btn fixed bottom-6 right-6 p-3 rounded-full z-50"
            aria-label="Back to top"
        >
            <ArrowUp size={18} />
        </button>
    );
}