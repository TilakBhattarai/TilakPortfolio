import { Code2, Layers, Terminal } from "lucide-react";

export const skillGroups = [
    {
        title: "Languages",
        icon: Code2,
        items: [
            { name: "Python", level: 40 },
            { name: "Java", level: 20 },
            { name: "JavaScript", level: 45 },
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "C++", level: 25 },
        ],
    },
    {
        title: "Frontend",
        icon: Layers,
        items: [
            { name: "React", level: 45 },
            { name: "Tailwind CSS", level: 85 },
            { name: "HTML5 / CSS3", level: 90 },
        ],
    },
    {
        title: "Backend",
        icon: Terminal,
        items: [
            { name: "Django", level: 35 },
        ],
    },
];