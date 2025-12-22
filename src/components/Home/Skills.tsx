import { motion } from 'framer-motion';

const skills = [
    { category: 'Languages', items: ['JS', 'TS', 'Java', 'Python', 'C#', 'PHP'] },
    { category: 'Backend', items: ['Node.js', 'Express'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL'] },
    { category: 'Tools', items: ['Linux', 'Docker', 'Nginx', 'Git'] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white overflow-hidden transition-colors duration-700">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="relative inline-block mb-12">
                        <span className="absolute top-1.5 left-1.5 md:top-2 md:left-2 text-3xl md:text-4xl font-bold tracking-tight text-neutral-300 dark:text-neutral-800 select-none">
                            Stack
                        </span>
                        <h2 className="relative z-10 text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Stack</h2>
                    </div>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 p-6 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10 group"
                        >
                            <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item, index) => (
                                    <motion.span 
                                        key={item} 
                                        className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 cursor-default"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: groupIndex * 0.1 + index * 0.05 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
