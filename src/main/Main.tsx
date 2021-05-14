import React from "react";
import s from './Main.module.css';

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hi There!</span>
                    <h1>I am Tania Kedrova</h1>
                    <p>FrontEnd Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}

export default Main;