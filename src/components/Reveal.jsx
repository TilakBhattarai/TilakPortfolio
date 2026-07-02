import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Reveal({ children, className = "", delay = 0 }) {
    const [ref, visible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}