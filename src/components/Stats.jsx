import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { number: '6+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '2+', label: 'Years Learning' },
    { number: '100%', label: 'Dedication' },
];

const Stats = () => {
    return (
        <div className="stats">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    );
};

export default Stats;
