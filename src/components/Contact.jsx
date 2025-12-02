import React, { useState } from 'react';

// ========================================
// 🔧 GOOGLE FORMS CONFIGURATION
// ========================================
// Follow the guide in google-forms-setup.md to get these values
// Replace these with your actual Google Form values:

const GOOGLE_FORM_CONFIG = {
    // Your Google Form action URL (replace FORM_ID with your actual form ID)
    formActionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdkZZ1yCED-qCOs_0oTEcMF2m8DHe4Bywh6vcQmq-OytFvOtw/formResponse',

    // Entry IDs for each field (get these from the pre-filled link)
    entryIds: {
        name: 'entry.1859869864',      // Name field
        email: 'entry.235357893',      // Email field
        subject: 'entry.1261514289',   // Subject field
        message: 'entry.1895423752'    // Message field
    }
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Create FormData object for Google Forms
            const googleFormData = new FormData();
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.name, formData.name);
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.email, formData.email);
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.subject, formData.subject);
            googleFormData.append(GOOGLE_FORM_CONFIG.entryIds.message, formData.message);

            // Submit to Google Forms
            await fetch(GOOGLE_FORM_CONFIG.formActionUrl, {
                method: 'POST',
                body: googleFormData,
                mode: 'no-cors' // Required for Google Forms
            });

            // Show success message
            setStatus({
                type: 'success',
                message: '✅ Message sent successfully! I\'ll get back to you soon.'
            });

            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Hide message after 5 seconds
            setTimeout(() => {
                setStatus({ type: '', message: '' });
            }, 5000);

        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({
                type: 'error',
                message: '❌ Failed to send message. Please try again or contact me directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">Get In Touch</div>
                    <h2 className="section-title">Let's Build Something Amazing</h2>
                    <p className="section-subtitle">I'm always open to discussing new projects, creative ideas, or opportunities</p>
                </div>

                <div className="contact-section-wrapper">
                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project or idea..."
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="form-submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending... ⏳' : 'Send Message 🚀'}
                            </button>

                            {status.message && (
                                <div className={`form-message ${status.type}`} style={{ display: 'block' }}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info-wrapper">
                        <div className="contact-info-card">
                            <div className="contact-info-icon">📞</div>
                            <h4>Phone</h4>
                            <p><a href="tel:+919664635841">+91 96646 35841</a></p>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">✉️</div>
                            <h4>Email</h4>
                            <p><a href="mailto:gogarinandan1128@gmail.com">gogarinandan1128@gmail.com</a></p>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">💼</div>
                            <h4>LinkedIn</h4>
                            <p><a href="https://linkedin.com/in/nandan-gogari-bab59a2a2" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
                        </div>

                        <div className="contact-info-card">
                            <div className="contact-info-icon">📍</div>
                            <h4>Location</h4>
                            <p>Gandhinagar, Gujarat, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
