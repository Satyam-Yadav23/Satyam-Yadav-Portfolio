import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaHtml5, FaCss3 } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import { FaCss } from 'react-icons/fa6';

export const assets = {
    profileImg,
    projectImg1,
    projectImg2,
    projectImg3,
}

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        description: 'I Love creating unique solutions to complex problems with cutting-edge technologies.',
        color: 'text-purple'
    },
    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description: 'Beautiful design and user experience are at the heart of everything I create.',
        color: 'text-pink'
    },
    {
        icon: FaCode,
        title: 'Clean Code',
        description: 'I write maintainable, efficient code following best practices and modern patterns.',
        color: 'text-blue'
    }
];

export const skills = [
    {
        title: 'Frontend Development',
        icon: FaReact,
        description: 'Building responsive and interactive user interfaces with modern frameworks.',
        tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
    },
    {
        title: 'Backend Development',
        icon: FaServer,
        description: 'Creating robust server-side applications and RESTful APIs.',
        tags: ['Node.js', 'Express', 'Django', 'Laravel']
    },
    {
        title: 'Database Management',
        icon: FaDatabase,
        description: 'Designing and optimizing databases for performance and scalability.',
        tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
        title: 'Cloud & DevOps',
        icon: FaCloud,
        description: 'Deploying and managing applications in cloud environments.',
        tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
        title: 'Tools & Technologies',
        icon: FaTools,
        description: 'Essential tools and technologies I use in my development workflow.',
        tags: ['Git & GitHub', 'Sublime Text', 'VS Code', 'Postman']
    }
]

export const projects = [
    {
        title: 'URL Shortener',
        description: 'A simple and efficient URL shortening service built with Node.js and Express.',
        image: projectImg1,
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer', 'nanoid', 'TanStack router', 'Tailwind CSS'],
        icons: [FaReact, FaNodeJs, FaDatabase , FaStripe ],
        demo: "#",
        code: "#",
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
        image: projectImg2,
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
        icons: [FaReact, FaCloud],
        demo: "#",
        code: "#",
    },
    {
        title: "SideBar MiniProject",
        description: "A responsive sidebar component with smooth animations and customizable options.",
        image: projectImg3,
        tech: ["HTML", "CSS"],
        icons: [FaHtml5, FaCss3],
        demo: "#",
        code: "#",
    },
]

export const contactInfo = [
    {

    }
]