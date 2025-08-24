import React from 'react';
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
// Placeholder skill icons - replace with your actual SVG icons
// import jsImage from '../img/js-file.svg'
// import reactImage from '../img/react.svg'
// import htmlImage from '../img/html.svg'

// Using professional devicon CDN URLs that match each skill
const jsImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
const htmlCssImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
const reactImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
const typescriptImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg';
const reduxImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg';
const viteImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg';
const tailwindImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg';

// React-related skills
const nextjsImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg';
const materialuiImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg';
const reactRouterImage = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'; // Using React icon for React Router
const styledComponentsImage = 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png';


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
                    <Skill title={'JavaScript'}
                           description={'Modern JavaScript ES6+, async/await, DOM manipulation, and API integration. Building interactive web applications with clean, efficient code.'}
                           skillIcon={jsImage}/>
                    <Skill title={'TypeScript'}
                           description={'Type-safe JavaScript development with static typing, interfaces, and enhanced IDE support. Improving code quality and maintainability.'}
                           skillIcon={typescriptImage}/>
                    <Skill title={'React'}
                           description={'Component-based architecture, hooks, state management, routing, and modern React patterns. Building scalable user interfaces.'}
                           skillIcon={reactImage}/>
                    <Skill title={'Next.js'}
                           description={'Full-stack React framework with server-side rendering, static generation, and API routes. Building production-ready applications with optimal performance.'}
                           skillIcon={nextjsImage}/>
                    <Skill title={'Redux'}
                           description={'Predictable state management with Redux Toolkit, middleware, and immutable updates. Managing complex application state efficiently.'}
                           skillIcon={reduxImage}/>
                    <Skill title={'React Router'}
                           description={'Declarative routing for React applications with dynamic route matching, nested routes, and navigation guards. Building single-page applications with seamless navigation.'}
                           skillIcon={reactRouterImage}/>
                    <Skill title={'HTML&CSS'}
                           description={'Semantic HTML5, responsive CSS3, Flexbox, Grid, animations, and cross-browser compatibility. Creating modern, accessible web layouts.'}
                           skillIcon={htmlCssImage}/>
                    <Skill title={'Tailwind CSS'}
                           description={'Utility-first CSS framework with responsive design, custom components, and rapid UI development. Building beautiful interfaces efficiently.'}
                           skillIcon={tailwindImage}/>
                    <Skill title={'Material-UI'}
                           description={'React component library implementing Google Material Design. Pre-built components, theming system, and responsive layouts for professional interfaces.'}
                           skillIcon={materialuiImage}/>
                    <Skill title={'Styled Components'}
                           description={'CSS-in-JS library for styling React components with dynamic props, theming, and component-scoped styles. Writing maintainable and reusable styled components.'}
                           skillIcon={styledComponentsImage}/>
                    <Skill title={'Vite'}
                           description={'Lightning-fast build tool with hot module replacement, optimized bundling, and modern development experience. Enhanced productivity workflow.'}
                           skillIcon={viteImage}/>
                </div>
            </div>
        </div>
    );
}


export default Skills;