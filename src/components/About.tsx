'use client';

import Section from './ui/Section';

export default function About() {
    return (
        <Section className="max-w-4xl mx-auto px-6" delay={0.2}>
            <h2 className="text-3xl font-bold mb-8 text-neutral-100 flex items-center gap-4">
                <span className="text-blue-500">01.</span> About Me
            </h2>

            <div className="text-neutral-400 leading-relaxed text-lg space-y-6">
                <p>
                    I am a <span className="text-white font-medium">21-year-old Computer Science undergraduate</span> at The Assam Kaziranga University.
                    I am passionate about building real-world projects and solving challenging problems.
                </p>
                <p>
                    With a strong programming foundation, I enjoy hands-on experience developing software applications across
                    <span className="text-blue-400"> Web, AI, and Systems domains</span>.
                    My journey involves constantly learning new technologies and applying them to create efficient, scalable solutions.
                </p>
            </div>
        </Section>
    );
}
