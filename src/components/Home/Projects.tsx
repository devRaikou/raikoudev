import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Star } from 'lucide-react';

interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
}

const Projects = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/devraikou/repos?sort=updated&per_page=6');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                // Filter out forks if desired, or keep them. 
                // For now, sorting by updated is the default from the API call.
                setRepos(data);
            } catch (error) {
                console.error('Error fetching repos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="py-32 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-700">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-xl text-neutral-500 dark:text-neutral-400 animate-pulse">Loading projects...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-32 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-700">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="relative inline-block">
                        <span className="absolute top-1.5 left-1.5 md:top-3 md:left-3 text-6xl md:text-8xl font-bold tracking-tighter text-neutral-200 dark:text-neutral-800 select-none whitespace-pre-wrap">
                            Selected <br /> <span>Works.</span>
                        </span>
                        <h2 className="relative z-10 text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-neutral-900 dark:text-neutral-50">
                            Selected <br /> <span className="text-neutral-400 dark:text-neutral-600">Works.</span>
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo, index) => (
                        <motion.div
                            key={repo.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative overflow-hidden aspect-video bg-neutral-100 dark:bg-neutral-800">
                                <img
                                    src={`https://opengraph.githubassets.com/1/devraikou/${repo.name}`}
                                    alt={repo.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    {repo.language && (
                                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs tracking-wider uppercase">
                                            {repo.language}
                                        </span>
                                    )}
                                    {repo.stargazers_count > 0 && (
                                        <span className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm gap-1">
                                            <Star size={14} className="fill-current" /> {repo.stargazers_count}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors capitalize line-clamp-1 mb-3">
                                    {repo.name.replace(/-/g, ' ')}
                                </h3>

                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-2 mb-3">
                                    {repo.description || 'No description available.'}
                                </p>

                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {repo.topics.slice(0, 3).map(topic => (
                                            <span 
                                                key={topic} 
                                                className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded-md font-medium"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Action Buttons - Always at bottom */}
                                <div className="mt-auto pt-3 flex gap-3">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-2 px-4 bg-neutral-900 dark:bg-neutral-800 text-white text-sm rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-600 transition-colors"
                                    >
                                        View Code
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
                                        >
                                            <ArrowUpRight size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
