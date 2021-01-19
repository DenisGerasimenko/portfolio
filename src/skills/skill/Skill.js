import React from 'react';
import styles from './Skill.module.scss';


function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.imgWrap}>
                <img src={props.skillIcon} className={styles.icon} />
            </div>

            <div className={styles.skillInfo}>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
        </div>
    );
}


export default Skill;