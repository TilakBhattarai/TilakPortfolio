import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view.
 * Returns a ref to attach to the target element and a boolean
 * indicating whether it has become visible.
 */
export function useScrollReveal({ threshold = 0.15 } = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible];
}