import { useEffect, useState } from "react";

/**
 * Tracks how far down the page the user has scrolled, as a
 * percentage (0-100). Useful for a scroll progress bar.
 */
export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setProgress(scrolled || 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return progress;
}