'use client';

import Section from './ui/Section';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        skills: ['C/C++', 'Java', 'JavaScript', 'Python', 'Golang', 'SQL', 'TypeScript'],
    },
    {
        title: 'Frameworks & Libraries',
        skills: ['React', 'Node.js', 'Express', 'Socket.io', 'Streamlit', 'OpenCV', 'MERN Stack'],
    },
    {
        title: 'Tools & Platforms',
        skills: ['Git', 'Linux (Ubuntu/Kali)', 'VS Code', 'Postman', 'Google AI Studio', 'Vercel', 'Netlify', 'Render'],
    },
    {
        title: 'Databases',
        skills: ['MongoDB', 'PostgreSQL'],
    },
];

export default function Skills() {
    return (
        <Section className="max-w-4xl mx-auto px-6" delay={0.2}>
            <h2 className="text-3xl font-bold mb-12 text-neutral-100 flex items-center gap-4">
                <span className="text-blue-500">02.</span> Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800"
                    >
                        <h3 className="text-lg font-semibold text-neutral-200 mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-sm rounded bg-neutral-800 text-neutral-400 hover:text-blue-400 hover:bg-neutral-800/80 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
