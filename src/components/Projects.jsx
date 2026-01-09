import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
    {
        icon: '💬',
        title: 'Chat Connect',
        description: 'MVVM-based Android chat application with real-time messaging, user presence tracking, and Firebase integration. Features clean architecture and responsive UI design.',
        tech: ['Kotlin', 'Firebase', 'Realtime DB'],
        links: {
            demo: '#',
            github: 'https://github.com/Nandan1128/Chat_Connect'
        }
    },
    {
        icon: '🌤️',
        title: 'WeatherNow',
        description: 'Modern weather app featuring Material 3 UI, Lottie animations, and real-time weather data. Built with Retrofit, Coroutines, and MVVM architecture.',
        tech: ['Kotlin', 'Retrofit', 'Material 3'],
        links: {
            demo: '#',
            github: 'https://github.com/Nandan1128/Weather_App_Now'
        }
    },
    {
        icon: '🔄',
        title: 'StitchFlow Suite',
        description: 'End-to-end workflow automation system for Production Management with task management, secure authentication, and real-time data handling. Scalable architecture with modular UI.',
        tech: ['React JS', 'Supabase', 'Auth', 'Real-time DB'],
        links: {
            demo: '#',
            github: 'https://github.com/jainam30/mohil-enterprise'
        }
    },
    {
        icon: '📄',
        title: 'Billing App',
        description: 'Professional invoice and billing management system with Firestore integration. Streamlined workflow for creating and tracking invoices.',
        tech: ['Kotlin', 'Firestore', 'Android'],
        links: {
            demo: '#',
            github: 'https://github.com/Nandan1128/Basic-Billing-App'
        }
    }
];

const Projects = () => {
    const handleDemoClick = (e) => {
        e.preventDefault();
        alert('Add your live demo URL here!');
    };

    return (
        <section id="projects">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">My Work</div>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Real-world applications built with passion, precision, and modern development practices</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-image">{project.icon}</div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.links.demo} className="project-link project-link-primary" onClick={handleDemoClick}>🚀 Live Demo</a>
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">💻 GitHub</a>
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
