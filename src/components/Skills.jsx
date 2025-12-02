import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        icon: '📱',
        title: 'Mobile Development',
        tags: ['Kotlin', 'Java', 'MVVM', 'Android Studio']
    },
    {
        icon: '💻',
        title: 'Programming',
        tags: ['C++', 'Python', 'VB', 'C#']
    },
    {
        icon: '🔥',
        title: 'Backend & Database',
        tags: ['Firebase', 'Supabase', 'MySQL', 'Oracle']
    },
    {
        icon: '⚛️',
        title: 'Web Development',
        tags: ['React JS', 'ASP.NET', 'PHP', 'JavaScript']
    },
    {
        icon: '🛠️',
        title: 'Tools & Workflow',
        tags: ['Git/GitHub', 'Jira', 'VS Code', 'Visual Studio']
    },
    {
        icon: '🧠',
        title: 'Soft Skills',
        tags: ['Problem Solving', 'Team Work', 'Adaptability', 'Quick Learning']
    }
];

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">What I Do</div>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">Building modern applications with cutting-edge technologies and best practices</p>
                </div>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.title}</h3>
                            <div className="skill-tags">
                                {skill.tags.map((tag, i) => (
                                    <span key={i} className="skill-tag">{tag}</span>
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
