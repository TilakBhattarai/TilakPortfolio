import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data";

export default function Navbar({ scrollTo }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (item) => {
        scrollTo(item.toLowerCase());
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="glass fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between">
                <span className="text-xl font-bold font-display">
                    Tilak
                </span>
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className="opacity-70 hover:opacity-100 transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {menuOpen && (
                <div className="glass fixed top-16 left-4 right-4 z-50 rounded-2xl p-6 flex flex-col gap-4 md:hidden">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className="text-left text-sm font-medium opacity-80"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}