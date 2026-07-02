import { useEffect, useState } from "react";

/**
 * Cycles through a list of strings with a typewriter effect:
 * types each string out, pauses, deletes it, then moves to the next.
 */
export function useTypingEffect(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1400 } = {}) {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex];
        let timeout;

        if (!deleting && displayText.length < current.length) {
            timeout = setTimeout(
                () => setDisplayText(current.slice(0, displayText.length + 1)),
                typeSpeed
            );
        } else if (!deleting && displayText.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && displayText.length > 0) {
            timeout = setTimeout(
                () => setDisplayText(current.slice(0, displayText.length - 1)),
                deleteSpeed
            );
        } else if (deleting && displayText.length === 0) {
            setDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

    return displayText;
}