import React from "react";
import classes from "./Title.module.css";

type TitlePropsType = {
    name: string
}

function Title(props: TitlePropsType) {
    return (
                <div className={classes.title}>
                    <h2>{props.name}</h2>
                </div>
           )
}

export default Title;

