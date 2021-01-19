import React from 'react';
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import jsImage from '../img/js-file.svg'
import reactImage from '../img/react.svg'
import htmlImage from '../img/html.svg'
import Title from "../common/components/title/Title";


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