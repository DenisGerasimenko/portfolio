import React from 'react';
import styles from './Main.module.scss';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};


function Main() {
    return (
        <div className={styles.mainBlock}>
            <Particles className={styles.particles} params={particlesOptions}/>
            <Fade top>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span>Hi There</span>
                        <span>I am Denis <span>Gerasimenko</span></span>
                        {/*<h1>Frontend Developer.</h1>*/}
                        <ReactTypingEffect
                            text='Frontend Developer.'
                        />
                    </div>
                    <Tilt className="Tilt" options={{ max : 25 }} >
                        <div className={styles.photo}>
                            <div className={styles.image}>
                            </div>
                        </div>
                    </Tilt>

                </div>
            </Fade>
        </div>
    );
}


export default Main;