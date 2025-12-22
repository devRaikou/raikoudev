import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const toRotate = ["Raikou", "Arda Gulez"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            // Natural typing speed variation
            let delta = 200 - Math.random() * 100;
            if (isDeleting) delta /= 2;

            if (!isDeleting && text === fullText) {
                delta = 2000; // Pause at end of word
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                delta = 500; // Pause before starting next word
            }

            setTypingSpeed(delta);
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]); // toRotate constant doesn't need to be in deps

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center relative bg-neutral-50 dark:bg-neutral-950 overflow-hidden px-6 transition-colors duration-700">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200/20 dark:bg-emerald-500/5 rounded-full blur-3xl opacity-50 animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-teal-200/20 dark:bg-teal-500/5 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-emerald-100/20 dark:bg-emerald-500/5 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000" />
            </div>
            <div className="max-w-6xl mx-auto w-full z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="order-2 md:order-1"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-neutral-500 dark:text-neutral-400 mb-6 tracking-wide">
                        Full Stack Web Developer
                    </h2>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] italic min-h-[1.2em] whitespace-nowrap">
                        <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500 bg-clip-text text-transparent">
                            {text}
                        </span>
                        <span className="ml-1 inline-block w-1 h-[0.8em] bg-emerald-500 dark:bg-emerald-400 animate-pulse align-middle opacity-70" />
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        I build accessible, pixel-perfect, and performant web experiences.
                        Check out my <a href="https://github.com/devRaikou" target="_blank" rel="noopener noreferrer" className="text-neutral-900 dark:text-neutral-100 font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">GitHub</a>.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-neutral-900 dark:bg-emerald-600 text-white rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all hover:scale-105 active:scale-95"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -15, 0] }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }
                    }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 to-teal-500/30 dark:from-emerald-400/20 dark:to-teal-400/20 rounded-[2rem] blur-2xl animate-pulse" />
                        <img
                            src="https://github.com/devRaikou.png"
                            alt="Arda Gulez"
                            className="relative w-full h-full object-cover rounded-[2rem] border-4 border-white dark:border-neutral-800 shadow-2xl shadow-emerald-500/20 dark:shadow-emerald-500/10 rotate-3 group-hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
            </div>


            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 text-neutral-400 dark:text-neutral-600"
            >
                <ArrowDown className="animate-bounce" />
            </motion.div>


        </section>
    );
};

export default Hero;
