'use client';

import Section from './ui/Section';
import Card from './ui/Card';
import { Github } from 'lucide-react';

const projects = [
    {
        title: 'Golf Charity Subscription Platform',
        description: 'A modern full-stack web app combining golf performance tracking, subscription-based participation, prize draw mechanics, and charity contributions. Features score tracking, monthly prize draws, reward tiers, and an admin panel.',
        tags: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS'],
        link: 'https://github.com/Monikanto/Golf-Charity-Subscription-Platform',
        liveLink: 'https://golf-charity-subscription-platform-chi.vercel.app/',
    },
    {
        title: 'BeyondChat - AI Powered Chat Support',
        description: 'A real-time customer support platform using React, Node.js, and Socket.io. Integrated AI-driven automated responses to handle common queries, reducing human workload by 40%. Includes a dashboard for managing chat sessions and user history.',
        tags: ['React', 'Node.js', 'Socket.io', 'AI Integration'],
        link: 'https://github.com/Monikanto/beyondchat',
    },
    {
        title: 'Face Recognition Attendance System',
        description: 'Automated attendance system capable of detecting and verifying student faces in real-time. Implemented DeepFace for accurate identification and integrated OpenCV for camera-based live capture and automated logging.',
        tags: ['Python', 'DeepFace', 'OpenCV', 'Automation'],
        link: 'https://github.com/Monikanto/Face-recognition-with--attendance',
    },
    {
        title: 'ForgeAPI Go REST Backend',
        description: 'Built a scalable RESTful backend in Go using Gin, JWT auth, PostgreSQL, and clean architecture.',
        tags: ['Go', 'JWT', 'PostgreSQL', 'Gin'],
        link: 'https://github.com/Monikanto/ForgeAPI',
    },
];

export default function Projects() {
    return (
        <Section className="max-w-4xl mx-auto px-6" delay={0.2}>
            <h2 className="text-3xl font-bold mb-12 text-neutral-100 flex items-center gap-4">
                <span className="text-blue-500">03.</span> Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        link={project.link}
                        liveLink={'liveLink' in project ? project.liveLink : undefined}
                    >
                        <Github size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                    </Card>
                ))}
            </div>
        </Section>
    );
}
