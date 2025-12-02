import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        title: 'Technology Job Simulation',
        company: 'Deloitte • November 2025',
        description: 'Participated in technology job simulation program gaining insights into professional development practices.'
    },
    {
        title: 'Master of Computer Applications',
        company: 'Swaminarayan University, Gandhinagar',
        description: 'Expected 2026 • Advanced studies in computer science, mobile development, and software engineering.'
    },
    {
        title: 'Android Development Intern',
        company: 'Technolyze.ai',
        description: 'Collaborated on Android app development using Kotlin and Firebase, focusing on UI improvement, bug fixing, and enhancing usability.'
    },
    {
        title: 'Android Development Workshop',
        company: 'Arth Consultancy • February 2024',
        description: 'Comprehensive Android development workshop covering modern development practices and tools.'
    },
    {
        title: 'Bachelor of Computer Applications',
        company: 'SSRACS College, Silvassa • 2024',
        description: 'Foundation in computer science, programming, and application development.'
    }
];

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">My Journey</div>
                    <h2 className="section-title">Experience & Education</h2>
                    <p className="section-subtitle">Continuous learning and professional growth in software development</p>
                </div>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p className="timeline-company">{item.company}</p>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
