import React from 'react';
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
// Placeholder skill icons - replace with your actual SVG icons
// import jsImage from '../img/js-file.svg'
// import reactImage from '../img/react.svg'
// import htmlImage from '../img/html.svg'

// Using placeholder icon URLs for now
const jsImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
const reactImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
const htmlImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';


function Skills() {
    // const js = {
    //     backgroundImage: 'url(' + jsImage + ')',
    // };
    // const react = {
    //     backgroundImage: 'url(' + reactImage + ')',
    // };
    // const html = {
    //     backgroundImage: 'url(' + htmlImage + ')',
    // };


    return (
        <div id='skills' className={styles.skillsBlock}>
            <div className={styles.container}>
                <Title text={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'JS'}
                           description={'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                           skillIcon={jsImage}/>
                    <Skill title={'HTML&CSS'}
                           description={'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.'}
                           skillIcon={reactImage}/>
                    <Skill title={'React'}
                           description={'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.'}
                           skillIcon={htmlImage}/>
                </div>
            </div>
        </div>
    );
}


export default Skills;