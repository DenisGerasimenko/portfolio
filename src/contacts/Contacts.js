import React, { useState } from "react";
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import Button from "../common/components/button/Button";
import Fade from "react-reveal/Fade";


function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('Sending...');

        try {
            // Method 1: Web3Forms (Priority service - most reliable)
            const web3FormData = new FormData();
            web3FormData.append('access_key', '317dacc2-3636-4862-adbf-e57270c995e2'); // Working demo key
            web3FormData.append('name', formData.name);
            web3FormData.append('email', formData.email);
            web3FormData.append('message', formData.message);
            web3FormData.append('subject', `Portfolio Contact from ${formData.name}`);
            web3FormData.append('from_name', 'Portfolio Contact Form');
            
            const web3Response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: web3FormData
            });

            const web3Result = await web3Response.json();
            console.log('Web3Forms Response:', web3Result); // Debug logging

            if (web3Result.success) {
                setSubmitStatus('Message sent successfully via Web3Forms! Thank you for contacting me.');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(''), 5000);
                return; // Exit here - email sent successfully
            } else {
                console.error('Web3Forms failed with error:', web3Result.message);
                // Continue to next service instead of showing error immediately
            }
        } catch (web3Error) {
            console.error('Web3Forms network error:', web3Error);
            // Continue to backup services
        }

        // Method 2: FormSubmit (reliable backup - no signup required)
        try {
            const formsubmitData = new FormData();
            formsubmitData.append('name', formData.name);
            formsubmitData.append('email', formData.email);
            formsubmitData.append('message', `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);
            formsubmitData.append('_subject', `Portfolio Contact from ${formData.name}`);
            formsubmitData.append('_captcha', 'false'); // Disable captcha
            formsubmitData.append('_template', 'table'); // Use table template
            
            const formsubmitResponse = await fetch('https://formsubmit.co/gerasimenkodenis7@gmail.com', {
                method: 'POST',
                body: formsubmitData
            });

            if (formsubmitResponse.ok) {
                setSubmitStatus('Message sent successfully via FormSubmit! Thank you for contacting me.');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(''), 5000);
                return; // Exit here - email sent successfully
            }
            
            console.log('FormSubmit response status:', formsubmitResponse.status);
        } catch (formsubmitError) {
            console.error('FormSubmit error:', formsubmitError);
        }

        try {
            // Method 2: Getform (Alternative reliable service)
            const getformData = new FormData();
            getformData.append('name', formData.name);
            getformData.append('email', formData.email);
            getformData.append('message', formData.message);
            
            const getformResponse = await fetch('https://getform.io/f/arolgoqa', {
                method: 'POST',
                body: getformData
            });

            if (getformResponse.ok) {
                setSubmitStatus('Message sent successfully via secondary service! Thank you for contacting me.');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(''), 5000);
                return;
            }
        } catch (getformError) {
            console.error('Getform error:', getformError);
        }

        try {
            // Method 3: Formspree (requires verification but reliable)
            const formspreeData = new FormData();
            formspreeData.append('name', formData.name);
            formspreeData.append('email', formData.email);
            formspreeData.append('message', formData.message);
            formspreeData.append('_replyto', formData.email);
            formspreeData.append('_subject', `Portfolio Contact from ${formData.name}`);
            
            const formspreeResponse = await fetch('https://formspree.io/f/xwpeqvea', {
                method: 'POST',
                body: formspreeData
            });

            if (formspreeResponse.ok) {
                setSubmitStatus('Message sent successfully via third service! Thank you for contacting me.');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(''), 5000);
                return;
            }
        } catch (formspreeError) {
            console.error('Formspree error:', formspreeError);
        }

        // Final fallback: mailto (all services failed)
        console.warn('All email services failed, using mailto fallback');
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Hi Denis,\n\nYou have received a new message from your portfolio website:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`;
        const mailtoLink = `mailto:gerasimenkodenis7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitStatus('All email services temporarily unavailable. Your email client has been opened. Please send manually.');
        setFormData({ name: '', email: '', message: '' });
        
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(''), 8000);
    };

    return (
        <div id='contacts' className={styles.contactsBlock}>
            <div className={styles.container}>
                <Title text={'Contacts'}/>
                <Fade>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name"
                            className={styles.formArea} 
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input 
                            type="email" 
                            name="email"
                            className={styles.formArea} 
                            placeholder='E-mail'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <textarea 
                            name="message"
                            className={styles.messageArea} 
                            placeholder='Message'
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                        {submitStatus && (
                            <div className={styles.statusMessage}>
                                {submitStatus}
                            </div>
                        )}
                        <Button 
                            text={isSubmitting ? 'Sending...' : 'Send Message'} 
                            type="submit"
                            disabled={isSubmitting}
                        />
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;