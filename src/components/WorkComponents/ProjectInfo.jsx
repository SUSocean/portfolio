import React, { useContext } from "react"
import { useParams } from "react-router-dom"

import { Context } from "../Context"

function ProjectInfo() {
    const { projectId } = useParams()
    const context = useContext(Context)

    const thisProject = context.find(project => project.id == projectId)
    console.log(thisProject)
    return (
        <h1>{thisProject.name}</h1>
    )
}


export default ProjectInfo