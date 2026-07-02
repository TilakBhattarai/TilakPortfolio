import { Code2, Layers, Terminal, Database } from "lucide-react";

export const skillGroups = [
    {
        title: "Languages",
        icon: Code2,
        items: [
            { name: "Java", level: 75 },
            { name: "JavaScript", level: 80 },
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
        ],
    },
    {
        title: "Frontend",
        icon: Layers,
        items: [
            { name: "React", level: 78 },
            { name: "Tailwind CSS", level: 82 },
            { name: "HTML5 / CSS3", level: 88 },
        ],
    },
    {
        title: "Backend",
        icon: Terminal,
        items: [
            { name: "Django", level: 65 },
            { name: "Node.js", level: 55 },
        ],
    },
    {
        title: "Database & Tools",
        icon: Database,
        items: [
            { name: "MySQL", level: 70 },
            { name: "Git & GitHub", level: 80 },
            { name: "VS Code", level: 90 },
        ],
    },
];