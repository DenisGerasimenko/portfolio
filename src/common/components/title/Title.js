import React from 'react';
import style from './Title.module.scss';



function Title(props) {
    return (<h2 className={style.title}>{props.text}</h2>

    );
}


export default Title;