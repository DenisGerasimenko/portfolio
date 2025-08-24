import React from 'react';
import styles from './Projects.module.scss';
import Project from "./Project/Project";
import Title from "../common/components/title/Title";
// Placeholder images - replace with your actual project images
// import snImage from '../img/social-network2.jpg'
// import cdsImage from '../img/cards3.png'
// import tdlImage from '../img/todo-list.png'

// Using professional project images that match the project themes
const snImage = 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2139&h=1200&q=80'; // Social Network theme
const cdsImage = 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&h=1200&q=80'; // Cards/Gaming theme
const tdlImage = 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&h=1200&q=80'; // Todo/Productivity theme


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
                             description={'A modern social networking platform built with React. Features user profiles, messaging, posts, and real-time interactions. Responsive design with clean UI/UX.'}
                             style={social}
                             items={socialLink}/>
                    <Project title={'Cards'}
                             description={'Interactive card game application featuring dynamic gameplay, score tracking, and responsive design. Built with modern JavaScript and engaging animations.'}
                             style={cards}
                             items={cardsLink}/>
                    <Project title={'Todolist'}
                             description={'A comprehensive task management application with drag-and-drop functionality, priority levels, and local storage. Clean interface for productivity enhancement.'}
                             style={list}
                             items={listLink}/>

                </div>
            </div>
        </div>
    );
}


export default Projects;