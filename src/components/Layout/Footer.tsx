import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-neutral-50 dark:bg-neutral-950 pt-20 pb-32 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-700">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-6"
                >
                    <h3 className="text-2xl font-bold tracking-tight">
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">Arda Gulez.</span>
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-md">
                        Building digital experiences with a focus on performance and aesthetics.
                    </p>
                </motion.div>

                <div className="flex gap-6">
                    {[
                        { icon: <img src="https://cdn.simpleicons.org/x" className="w-5 h-5 opacity-70 dark:invert" alt="X" />, href: "https://x.com/devraikou", label: "X (Twitter)" },
                        { icon: <Github size={20} />, href: "https://github.com/devraikou", label: "GitHub" },
                        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/ardagulez/", label: "LinkedIn" },
                        { icon: <Mail size={20} />, href: "mailto:hello@raikou.dev", label: "Email" }
                    ].map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all shadow-sm hover:shadow-lg"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50 text-sm text-neutral-400 dark:text-neutral-500">
                    <p>© {new Date().getFullYear()} Arda Gulez. All rights reserved.</p>
                    <motion.button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors mt-4 md:mt-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Back to Top <ArrowUp size={14} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
