'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
    title: string;
    description: string;
    tags?: string[];
    link?: string;
    liveLink?: string;
    children?: ReactNode;
}

export default function Card({ title, description, tags, link, liveLink, children }: CardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="block p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors group"
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-neutral-200 group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <div className="flex items-center gap-3">
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-emerald-400 transition-colors"
                            title="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-white transition-colors"
                            title="GitHub"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {children}
                        </a>
                    )}
                </div>
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
        </motion.div>
    );
}
