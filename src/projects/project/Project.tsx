import React from "react";
import classes from "./Project.module.css";

export type ProjectType = {
    name: string
    description: string
}

function Project(props: ProjectType) {
    return (
        <div className={classes.project}>
            <div className={classes.picture}>
                <a href='https://www.freecodecamp.org/'><button className={classes.btn}>Open</button></a>
            </div>
            <div>
                <div className={classes.projectName}>{props.name}
                </div>
                <div className={classes.description}>{props.description}
                </div>
            </div>
        </div>
    )
}

export default Project;