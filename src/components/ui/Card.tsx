'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
    title: string;
    description: string;
    tags?: string[];
    link?: string;
    children?: ReactNode;
}

export default function Card({ title, description, tags, link, children }: CardProps) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="block p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-neutral-200 group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                {children}
            </div>
            <p className="text-neutral-400 mb-6 line-clamp-3">{description}</p>
            {tags && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </motion.a>
    );
}
