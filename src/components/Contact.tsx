'use client';

import Section from './ui/Section';

export default function Contact() {
    return (
        <Section className="max-w-4xl mx-auto px-6 text-center" delay={0.2}>
            <h2 className="text-3xl font-bold mb-8 text-neutral-100">
                <span className="text-blue-500">04.</span> Get In Touch
            </h2>

            <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <a
                href="mailto:manikurmi14@gmail.com"
                className="inline-block border border-blue-500 text-blue-500 font-medium px-8 py-4 rounded hover:bg-blue-500/10 transition-colors"
            >
                Say Hello
            </a>

            <footer className="mt-20 pt-10 border-t border-neutral-900 text-neutral-600 text-sm">
                <p>Designed & Built by Mani</p>
            </footer>
        </Section>
    );
}
