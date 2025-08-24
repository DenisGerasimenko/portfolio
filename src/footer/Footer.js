import React from 'react';
import styles from './Footer.module.scss';
import Title from '../common/components/title/Title';
// Placeholder social media icon - replace with your actual SVG icon
// import linkedinIcon from '../img/linkedin.svg'

// Using placeholder icon URL for now
const linkedinIcon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title text={'Denis Gerasimenko'}/>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                    <a href='https://www.linkedin.com/in/denis-gerasimenko-59a293201/'>
                        <img src={linkedinIcon} alt=''/>
                    </a>
                    </div>
                </div>
                <span className={styles.copyright}> All Rights Reserved.</span>
            </div>
        </div>
    );
}


export default Footer;