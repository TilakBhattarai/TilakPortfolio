import Vyapaar from "src/assets/Vyapaar.jpg";
import EmployeeMgmt from "src/assets/EmployeeMgmt.png";
import TaskFlow from "src/assets/TaskFlow.png";

export const projects = [
    {
        title: "Vyapaar",
        desc: "A modern eCommerce platform with product browsing, cart functionality, and responsive UI.",
        tags: ["React.js", "Tailwind CSS", "Javascript"],
        image: Vyapaar,
        github: "https://github.com/BIwashbhatarai/ecommerce-app",
        demo: "https://bazaar-site.vercel.app/"
    },
    {
        title: "TeamFlow",
        desc: "Modern employee management dashboard with role-based access, employee tracking, and admin controls.",
        tags: ["React.js", "Tailwind CSS", "Javascript"],
        image: EmployeeMgmt,
        github: "https://github.com/BIwashbhatarai/ecommerce-app",
        demo: "https://bazaar-site.vercel.app/"
    },
    {
        title: "TaskFlow",
        desc: "Django-based task management application featuring user authentication, CRUD operations, task filtering, priority management, dashboard statistics, and deployment on Render.",
        tags: ["Python", "Django", "HTML", "CSS", "SQLite"],
        image: TaskFlow,
        github: "https://github.com/BIwashbhatarai/taskflow",
        demo: "https://taskflow-vh1v.onrender.com/sign_in/?next=/"
    },
];