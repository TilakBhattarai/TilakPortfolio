import { useEffect, useState } from "react";

/**
 * Returns true once the page has been scrolled past `threshold` pixels.
 * Used to conditionally show a "back to top" button.
 */
export function useScrolledPast(threshold = 500) {
    const [past, setPast] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setPast(document.documentElement.scrollTop > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return past;
}