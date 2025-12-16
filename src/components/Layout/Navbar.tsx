import { useState, useEffect } from 'react';
import { Home, User, Code, Folder, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#hero', id: 'hero', icon: <Home size={20} /> },
        { name: 'About', href: '#about', id: 'about', icon: <User size={20} /> },
        { name: 'Skills', href: '#skills', id: 'skills', icon: <Code size={20} /> },
        { name: 'Projects', href: '#projects', id: 'projects', icon: <Folder size={20} /> },
        { name: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={20} /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveTab(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full sm:w-auto px-4 sm:px-0">
            <motion.nav
                className="flex items-center justify-between sm:justify-center gap-1 sm:gap-2 p-2 bg-white/80 backdrop-blur-xl border border-white/50 ring-1 ring-black/5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        onClick={() => setActiveTab(link.id)}
                        className="relative px-4 py-2.5 rounded-full transition-colors relative z-10 flex-1 sm:flex-none text-center"
                    >
                        {activeTab === link.id && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full -z-10 shadow-lg shadow-teal-500/20"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                        <motion.div
                            className={`flex items-center justify-center gap-2 ${activeTab === link.id ? 'text-white' : 'text-neutral-500 hover:text-neutral-900'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">{link.icon}</span>
                            <AnimatePresence>
                                {activeTab === link.id && (
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: 'auto', opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        className="text-sm font-medium overflow-hidden whitespace-nowrap hidden md:block"
                                    >
                                        {link.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </a>
                ))}
            </motion.nav>
        </div>
    );
};

export default Navbar;
