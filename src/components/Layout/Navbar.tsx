import { useState, useEffect } from 'react';
import { Home, User, Code, Folder, Mail, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
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
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full sm:w-auto px-4 sm:px-0 flex items-center justify-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
                onClick={toggleDarkMode}
                className="p-3 glass-effect rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            >
                <AnimatePresence mode="wait">
                    {darkMode ? (
                        <motion.div
                            key="sun"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Sun size={20} className="text-amber-500 group-hover:text-amber-400 transition-colors" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Moon size={20} className="text-indigo-600 group-hover:text-indigo-500 transition-colors" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Navigation */}
            <motion.nav
                className="flex items-center justify-between sm:justify-center gap-1 sm:gap-2 p-2 glass-effect rounded-full shadow-lg"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        onClick={() => setActiveTab(link.id)}
                        className="relative px-4 py-2.5 rounded-full transition-all duration-300 relative z-10 flex-1 sm:flex-none text-center"
                    >
                        {activeTab === link.id && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full -z-10 shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                        <motion.div
                            className={`flex items-center justify-center gap-2 transition-colors ${
                                activeTab === link.id 
                                    ? 'text-white' 
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
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
