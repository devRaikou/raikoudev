import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-[70vh] flex flex-col justify-center items-center bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 py-32 text-center px-6 transition-colors duration-700">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-2xl mx-auto">
                    Let's work together.
                </h2>
                <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 mb-12 max-w-xl mx-auto leading-relaxed">
                    Have a project in mind? I'm always looking for new opportunities to build amazing products.
                </p>
                <motion.a
                    href="mailto:hello@raikou.dev"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-emerald-600 text-white rounded-full text-lg font-medium hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all hover:gap-4 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get in Touch <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Contact;
