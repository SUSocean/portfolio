import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import { Context } from "../Context"

function ProjectInfo() {
    const { projectId } = useParams()
    const context = useContext(Context)

    const thisProject = context.find(project => project.id == projectId)

    const toolsObj = thisProject.tools.map(tool => (<i key={tool} className={tool}></i>))

    const verivalStyles = {
        width: '50%',
    }

    return (
        <div className="project-container">
            <div className="project-container-navigation">
                <span></span>
                <h1 className="project-container-navigation--name">THIS IS <span className="green-focus capital">{thisProject.name}</span>
                </h1>
                <HashLink className="project-container--navigation--go-back-link" to='/#WORK'>
                    <p title="GO BACK">GO BACK</p>
                </HashLink>
            </div>
            <div className="project-container--content">
                <div className="project-container--content--images">
                    <img style={thisProject.isVerticaltal ? verivalStyles : null}
                        src={thisProject.mainScreenShotUrl} alt="project main screenshot" />
                    {thisProject.additionalScreenShotUrl && <img src={thisProject.additionalScreenShotUrl} alt="project secondary screenshot" />}
                </div>

                <div className="project-container--content--info">
                    <div className="project-container--content--info--tools">
                        {toolsObj}
                    </div>
                    <p className="project-container--content--info--description">
                        {thisProject.description}
                    </p>
                    <a target='_blank' className="project-container--content--info--link-code" href={thisProject.codeLink}
                        title='CODE'
                    >CODE</a>
                    <a target='_blank' className="project-container--content--info--link-site" href={thisProject.siteLink}
                        title='SITE'
                    >SITE</a>
                </div>
            </div>
        </div>
    )
}


export default ProjectInfo