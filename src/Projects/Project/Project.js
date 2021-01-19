import React from 'react';
import styles from './Project.module.scss';


function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={props.style}>
                <a href={props.items}  className={styles.viewBtn}>View</a>
            </div>
            <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
}


export default Project;