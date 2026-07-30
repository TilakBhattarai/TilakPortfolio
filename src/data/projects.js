import Vyapaar from "../assets/Vyapaar.webp";
import EmployeeMgmt from "../assets/EmployeeMgmt.webp";
import TaskFlow from "../assets/TaskFlow.webp";
import JobHub from "../assets/JobHub.png";
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
        demo: "https://employee-management-app-mocha-eight.vercel.app/"
    },
    {
        title: "TaskFlow",
        desc: "Django-based task management application featuring user authentication, CRUD operations, task filtering, priority management, dashboard statistics, and deployment on Render.",
        tags: ["Python", "Django", "HTML", "CSS", "SQLite"],
        image: TaskFlow,
        github: "https://github.com/BIwashbhatarai/taskflow",
        demo: "https://taskflow-vh1v.onrender.com/sign_in/?next=/"
    },

    {
        title: "JobHub",
        desc: "A full-stack Django job portal connecting recruiters and job seekers with role-based authentication, job posting, job search, application tracking, recruiter dashboards, and resume uploads.",
        tags: ["Python", "Django", "HTML", "CSS", "SQLite"],
        image: JobHub,
        github: "https://github.com/BIwashbhatarai/JobHub",
        demo: "https://jobhub-v2y0.onrender.com/"
    },
];