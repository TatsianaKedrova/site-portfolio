import React from "react";
import classes from "./Projects.module.css";
import styleContainer from "./../common/styles/Container.module.css";


function Projects() {
    return (
        <div className={classes.projectsBlock}>
            <div className={`${styleContainer.container} ${classes.projectsContainer}`}>
                <h2 className={classes.title}>My Projects</h2>

            </div>
        </div>
    )
}

export default Projects;

