import React, { createContext, useState } from "react"

const Context = createContext()

function ContextProvider(props) {

    const [projectsData, setProjectsData] = useState([
        {
            id: 'Sedona',
            name: 'Sedona',
            mainScreenShotUrl: './src/images/sedona.jpg',
            additionalScreenShotUrl: '',
        },
        {
            id: 'Color',
            name: 'Color Picker',
            mainScreenShotUrl: './src/images/colorpicker.png',
        },
        {
            id: 'Quizical',
            name: 'Quizical',
            mainScreenShotUrl: './src/images/quizical.png',
        },
        {
            id: 'Start',
            name: 'Start Screen',
            mainScreenShotUrl: './src/images/startScreen.png',
        },
        {
            id: 'Toy',
            name: 'Toy Store',
            mainScreenShotUrl: './src/images/ToyStore.png',
        },
        {
            id: 'Watchlist',
            name: 'Watchlist',
            mainScreenShotUrl: './src/images/watchlist.png',
        }

    ])

    return (
        <Context.Provider value={projectsData}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context } 