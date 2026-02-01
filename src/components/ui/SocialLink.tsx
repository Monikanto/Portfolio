'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SocialLinkProps {
    href: string;
    icon: React.ElementType; // Icon component type
    label: string;
}

export default function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#60a5fa' }}
            whileTap={{ scale: 0.95 }}
            className="text-neutral-400 hover:text-blue-400 transition-colors"
            aria-label={label}
        >
            <Icon size={24} />
        </motion.a>
    );
}
