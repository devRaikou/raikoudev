import { motion } from 'framer-motion';
import { GraduationCap, Terminal, User, Users, Coffee, FolderGit, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const About = () => {
    const [stats, setStats] = useState({
        repos: 0,
        followers: 0,
        exp: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://api.github.com/users/devRaikou');
                const data = await response.json();

                // Calculate experience (Start year: 2021)
                const startYear = 2021;
                const currentYear = new Date().getFullYear();

                setStats({
                    repos: data.public_repos || 20,
                    followers: data.followers || 0,
                    exp: currentYear - startYear
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
                // Fallback
                setStats(prev => ({ ...prev, exp: new Date().getFullYear() - 2021, repos: 20 }));
            }
        };

        fetchStats();
    }, []);

    return (
        <section id="about" className="py-32 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 relative transition-colors duration-700">

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="relative inline-block">
                        <span className="absolute top-1.5 left-1.5 md:top-2 md:left-2 text-4xl md:text-5xl font-bold tracking-tight text-neutral-200 dark:text-neutral-800 select-none whitespace-nowrap">
                            About Me
                        </span>
                        <h2 className="relative z-10 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">About Me</h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        className="md:col-span-2 bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 md:p-8 border border-neutral-100 dark:border-neutral-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all group shadow-lg hover:shadow-xl"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm group-hover:shadow-md transition-all group-hover:scale-110">
                                <User className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">Who I Am</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                                    I'm <span className="font-semibold text-neutral-900 dark:text-neutral-100">Arda Gulez</span>, a 21-year-old Computer Programming student and Full Stack Web Developer.
                                    Known as <span className="font-semibold text-emerald-600 dark:text-emerald-400">Raikou</span> in the digital realm, I combine academic foundations with practical engineering to build accessible, pixel-perfect web experiences.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Student Status Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 md:p-8 border border-neutral-100 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-lg hover:shadow-xl"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm w-fit group-hover:shadow-md transition-all mb-6 group-hover:scale-110">
                                <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-neutral-500 dark:text-neutral-400 font-medium mb-1">Education</p>
                                <h3 className="text-xl font-semibold">Computer Programming Student</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Developer Role Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 md:p-8 border border-neutral-100 dark:border-neutral-800 hover:border-purple-200 dark:hover:border-purple-800 transition-all group shadow-lg hover:shadow-xl"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm w-fit group-hover:shadow-md transition-all mb-6 group-hover:scale-110">
                                <Terminal className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-neutral-500 dark:text-neutral-400 font-medium mb-1">Role</p>
                                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Statistics Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        className="md:col-span-2 bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 md:p-8 border border-neutral-100 dark:border-neutral-800 hover:border-teal-200 dark:hover:border-teal-800 transition-all group shadow-lg hover:shadow-xl"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Experience */}
                            <div className="flex flex-col justify-between h-full gap-4">
                                <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm w-fit group-hover:shadow-md transition-all group-hover:scale-110">
                                    <Clock className="w-6 h-6 text-teal-500 dark:text-teal-400" />
                                </div>
                                <div>
                                    <p className="text-neutral-500 dark:text-neutral-400 font-medium mb-1 text-sm">Experience</p>
                                    <h4 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">{stats.exp}+ Years</h4>
                                </div>
                            </div>

                            {/* Projects/Repos */}
                            <div className="flex flex-col justify-between h-full gap-4">
                                <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm w-fit group-hover:shadow-md transition-all group-hover:scale-110">
                                    <FolderGit className="w-6 h-6 text-teal-500 dark:text-teal-400" />
                                </div>
                                <div>
                                    <p className="text-neutral-500 dark:text-neutral-400 font-medium mb-1 text-sm">Repositories</p>
                                    <h4 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">{stats.repos > 0 ? stats.repos : '20'}+</h4>
                                </div>
                            </div>

                            {/* Followers */}
                            <div className="flex flex-col justify-between h-full gap-4">
                                <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm w-fit group-hover:shadow-md transition-all group-hover:scale-110">
                                    <Users className="w-6 h-6 text-teal-500 dark:text-teal-400" />
                                </div>
                                <div>
                                    <p className="text-neutral-500 dark:text-neutral-400 font-medium mb-1 text-sm">Followers</p>
                                    <h4 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">{stats.followers > 0 ? stats.followers : '0'}+</h4>
                                </div>
                            </div>

                            {/* Coffee */}
                            <div className="flex flex-col justify-between h-full gap-4">
                                <div className="p-3 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm w-fit group-hover:shadow-md transition-all group-hover:scale-110">
                                    <Coffee className="w-6 h-6 text-teal-500 dark:text-teal-400" />
                                </div>
                                <div>
                                    <p className="text-neutral-500 dark:text-neutral-400 font-medium mb-1 text-sm">Coffee</p>
                                    <h4 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">∞</h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
