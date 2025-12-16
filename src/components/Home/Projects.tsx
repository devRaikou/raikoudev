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
            <section id="projects" className="py-32 bg-neutral-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-xl text-neutral-500 animate-pulse">Loading projects...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-32 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="relative inline-block">
                        <span className="absolute top-1.5 left-1.5 md:top-3 md:left-3 text-6xl md:text-8xl font-bold tracking-tighter text-neutral-200 select-none whitespace-pre-wrap">
                            Selected <br /> <span className="text-neutral-200">Works.</span>
                        </span>
                        <h2 className="relative z-10 text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-neutral-900">
                            Selected <br /> <span className="text-neutral-400">Works.</span>
                        </h2>
                    </div>
                </motion.div>

                <div className="space-y-32">
                    {repos.map((repo, index) => (
                        <motion.div
                            key={repo.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative grid md:grid-cols-2 gap-8 items-center"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-video shadow-lg border border-neutral-200 bg-neutral-100">
                                <img
                                    src={`https://opengraph.githubassets.com/1/devraikou/${repo.name}`}
                                    alt={repo.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-500" />
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    {repo.language && (
                                        <span className="text-emerald-600 font-medium text-sm tracking-widest uppercase">
                                            {repo.language}
                                        </span>
                                    )}
                                    {repo.stargazers_count > 0 && (
                                        <span className="flex items-center text-neutral-500 text-sm gap-1">
                                            <Star size={14} /> {repo.stargazers_count}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-4xl font-bold group-hover:text-emerald-600 transition-colors capitalize">
                                    {repo.name.replace(/-/g, ' ')}
                                </h3>

                                <p className="text-neutral-600 text-lg leading-relaxed line-clamp-3">
                                    {repo.description || 'No description available for this repository.'}
                                </p>

                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {repo.topics.slice(0, 3).map(topic => (
                                            <span key={topic} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-md">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="pt-4 flex items-center gap-4">
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-neutral-900 text-white border border-neutral-900 rounded-full hover:bg-emerald-600 hover:border-emerald-600 transition-colors"
                                            title="Live Demo"
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    )}
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors text-neutral-900"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </a>
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
