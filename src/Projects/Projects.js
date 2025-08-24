import React from 'react';
import styles from './Projects.module.scss';
import Project from "./Project/Project";
import Title from "../common/components/title/Title";
// Placeholder images - replace with your actual project images
// import snImage from '../img/social-network2.jpg'
// import cdsImage from '../img/cards3.png'
// import tdlImage from '../img/todo-list.png'

// Using placeholder URLs for now
const snImage = 'https://via.placeholder.com/400x250/667eea/ffffff?text=Social+Network';
const cdsImage = 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Cards+Project';
const tdlImage = 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Todo+List';


function Projects() {

    const social = {
        backgroundImage: 'url(' + snImage + ')',
    };
    const cards = {
        backgroundImage: 'url(' + cdsImage + ')',
    };
    const list = {
        backgroundImage: 'url(' + tdlImage + ')',
    };

    const socialLink = 'https://denisgerasimenko.github.io/social_network/'

    const cardsLink = 'https://grok88.github.io/cards_project/'

    const listLink = 'https://denisgerasimenko.github.io/todolist/'

    return (
        <div id='projects' className={styles.projectsBlock}>
            <div className={styles.container}>
                <Title text={'Projects'}/>
                <div className={styles.projects}>
                    <Project title={'Social Network'}
                             description={'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                             style={social}
                             items={socialLink}/>
                    <Project title={'Cards'}
                             description={'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.'}
                             style={cards}
                             items={cardsLink}/>
                    <Project title={'Todolist'}
                             description={'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.'}
                             style={list}
                             items={listLink}/>

                </div>
            </div>
        </div>
    );
}


export default Projects;