import React from "react";
import classes from "./Projects.module.css";
import styleContainer from "./../common/styles/Container.module.css";
import Project from "./project/Project";


function Projects() {
    return (
        <div className={classes.projectsBlock}>
            <div className={`${styleContainer.container} ${classes.projectsContainer}`}>
                <h2 className={classes.title}>My Projects</h2>
                <div className={classes.projects}>
                    <Project name={"Social Network"} description={"This is a social net project that was developed using React-Redux-Typescript technologies. It is full of modern features and is ready to use right now."}/>
                    <Project name={"TodoList"} description={"This is a Todolist application that is more complicated that it can seem to be. You can perform various actions like reordering lists, making api calls to the server, login and logout and many more fancy actions. React, Redux, Typescript, axios and thunks are just for developing it."}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;

