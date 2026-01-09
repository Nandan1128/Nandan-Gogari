import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const scrollToSkills = () => {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="hero-badge">Available for Work</div>
                    <h1>Nandan Gogari</h1>
                    <p className="subtitle">
                        Crafting <strong>exceptional mobile experiences</strong> with Kotlin and real world modern Android development
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary"><span>View My Work</span></a>
                        <a href="#contact" className="btn btn-secondary"><span>Let's Connect</span></a>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-indicator" onClick={scrollToSkills}>
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
