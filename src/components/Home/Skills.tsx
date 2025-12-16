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
        <section id="skills" className="py-20 bg-neutral-900 text-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="relative inline-block mb-12">
                        <span className="absolute top-1.5 left-1.5 md:top-2 md:left-2 text-3xl md:text-4xl font-bold tracking-tight text-neutral-700 select-none">
                            Stack
                        </span>
                        <h2 className="relative z-10 text-3xl md:text-4xl font-bold tracking-tight text-white">Stack</h2>
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
                            className="bg-neutral-800/30 border border-neutral-800/50 p-6 rounded-2xl hover:bg-neutral-800/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-4 text-emerald-400">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span key={item} className="px-3 py-1 bg-neutral-900 rounded-md text-sm text-neutral-300 border border-neutral-800">
                                        {item}
                                    </span>
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
