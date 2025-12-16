import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-neutral-50 pt-20 pb-32 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-6"
                >
                    <h3 className="text-2xl font-bold tracking-tight">
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Arda Gulez.</span>
                    </h3>
                    <p className="text-neutral-500 max-w-md">
                        Building digital experiences with a focus on performance and aesthetics.
                    </p>
                </motion.div>

                <div className="flex gap-6">
                    {[
                        { icon: <img src="https://cdn.simpleicons.org/x" className="w-5 h-5 opacity-70" alt="X" />, href: "https://x.com/devraikou", label: "X (Twitter)" },
                        { icon: <Github size={20} />, href: "https://github.com/devraikou", label: "GitHub" },
                        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ardagulez/", label: "LinkedIn" },
                        { icon: <Mail size={20} />, href: "mailto:hello@raikou.dev", label: "Email" }
                    ].map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, color: '#10b981' }}
                            className="p-3 bg-white border border-neutral-200 rounded-full text-neutral-500 hover:text-emerald-500 hover:border-emerald-200 transition-colors shadow-sm"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-neutral-200/50 text-sm text-neutral-400">
                    <p>© {new Date().getFullYear()} Arda Gulez. All rights reserved.</p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-emerald-500 transition-colors mt-4 md:mt-0"
                    >
                        Back to Top <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
