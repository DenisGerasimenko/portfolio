import React from "react";
import styles from './Contacts.module.scss';
import Title from '../common/components/title/Title';
import Button from "../common/components/button/Button";
import Fade from "react-reveal/Fade";


function Contacts() {
    return (
        <div id='contacts' className={styles.contactsBlock}>
            <div className={styles.container}>
                <Title text={'Contacts'}/>
                <Fade>
                    <form className={styles.form}>
                        <input type="text" className={styles.formArea} placeholder='Name'/>
                        <input type="text" className={styles.formArea} placeholder='e-mail'/>
                        <textarea className={styles.messageArea} placeholder='Message'/>
                        <Button text={'Send Message'} />
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;