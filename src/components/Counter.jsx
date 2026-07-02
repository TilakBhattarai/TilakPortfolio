import React from "react";
import { useCounter } from "../hooks/useCounter";

export default function Counter({ target }) {
    const [ref, count] = useCounter(target);

    return (
        <span ref={ref}>
            {count}
            <span className="text-amber">+</span>
        </span>
    );
}