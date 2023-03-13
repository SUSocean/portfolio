import React, { createContext, useState } from "react"

const Context = createContext()

function ContextProvider(props) {

    const [projectsData, setProjectsData] = useState([
        {
            name: 'Sedona',
            mainScreenShotUrl: '../images/sedona.jpg',
            additionalScreenShotUrl: '../images/sedona-options.png',
        }
    ])

    return (
        <Context.Provider value={projectsData}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context } 