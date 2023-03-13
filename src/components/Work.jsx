import React, { useContext } from "react";
import Project from "./WorkComponents/Project";
import { Context } from './Context'

function Work() {
    const context = useContext(Context)
    console.log(context[0].mainScreenShotUrl)
    return (
        <div className="work-container">
            <Project
                img={context[0].mainScreenShotUrl}
            />
        </div>
    )
}

export default Work
