import React from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollProgress() {
    const progress = useScrollProgress();

    return (
        <div
            className="fixed top-0 left-0 h-[3px] z-[100] bg-gradient-to-r from-teal to-amber transition-[width] duration-100"
            style={{ width: `${progress}%` }}
        />
    );
}