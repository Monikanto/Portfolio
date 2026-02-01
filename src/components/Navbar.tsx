'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-neutral-800/50 bg-neutral-950/80"
        >
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight hover:text-neutral-300 transition-colors">
                    mani<span className="text-blue-500">.</span>
                </Link>

                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
