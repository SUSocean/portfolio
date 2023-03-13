import React, { useContext } from "react";
import Project from "./WorkComponents/Project";
import { Context } from './Context'

function Work() {
    const context = useContext(Context)
    const Projects = context.map(project => (
        <Project
            img={project.mainScreenShotUrl}
            name={project.name}
            id={project.id}
            key={project.name}
        />
    ))
    return (
        <div id="WORK" className="work-container">
            <h1 className="work-container--headline">My <span className="green-focus">Projects</span></h1>
            <div className="work-contaienr--table">
                {Projects}
            </div>
        </div>
    )
}

export default Work
