import React from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            {/*<a href="">Skills</a>*/}
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Skills</Link>
            {/*<a href="#projects">Projects</a>*/}
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Projects</Link>
            {/*<a href="">Contacts</a>*/}
            <Link
                activeClass={style.active}
                to='contacts'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contacts</Link>

        </div>
    );
}


export default Nav;