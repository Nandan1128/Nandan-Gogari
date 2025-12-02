import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">NG</div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Android & Software Developer</p>

            <div className="social-links">
                <a href="https://linkedin.com/in/nandan-gogari-bab59a2a2" target="_blank" rel="noopener noreferrer" className="social-link">💼</a>
                <a href="mailto:gogarinandan1128@gmail.com" className="social-link">✉️</a>
                <a href="tel:+919664635841" className="social-link">📞</a>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>&copy; 2024 Nandan Gogari. Built with passion for mobile development.</p>
        </footer>
    );
};

export default Footer;
