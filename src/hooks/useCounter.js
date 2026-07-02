import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

/**
 * Animates counting up to a target number once the element
 * scrolls into view. Returns [ref, count] — attach ref to the
 * element you want to trigger the count.
 */
export function useCounter(target, { duration = 1200 } = {}) {
    const [ref, visible] = useScrollReveal();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!visible) return;

        let current = 0;
        const stepTime = Math.max(Math.floor(duration / target), 20);
        const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [visible, target, duration]);

    return [ref, count];
}