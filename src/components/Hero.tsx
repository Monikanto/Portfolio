'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import SocialLink from './ui/SocialLink';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-blue-400 font-medium tracking-wide mb-4 uppercase text-sm"
                >
                    Computer Science Undergrad
                </motion.h2>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
                    Monikanto Kurmi
                </h1>

                <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Building real-world projects and solving challenging problems across Web, AI, and Systems domains.
                </p>

                <div className="flex items-center justify-center gap-6 mb-12">
                    <SocialLink href="https://github.com/Monikanto" icon={Github} label="GitHub" />
                    <SocialLink href="https://linkedin.com/in/monikanto-krumi" icon={Linkedin} label="LinkedIn" />
                    <SocialLink href="mailto:manikurmi14@gmail.com" icon={Mail} label="Email" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors font-medium"
                    >
                        View My Work
                        <ArrowDown size={18} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
