import React, { createContext, useState } from "react"

const Context = createContext()

function ContextProvider(props) {

    const [projectsData, setProjectsData] = useState([
        {
            id: 'Sedona',
            name: 'Sedona',
            isVerticaltal: false,
            mainScreenShotUrl: '/src/images/sedona.jpg',
            additionalScreenShotUrl: '/src/images/sedona-options.png',
            tools: ['fa-brands fa-figma', 'fa-brands fa-github', 'fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'],
            description: `This is a website for the Grand Canyon competitor - Sedona. This website has a ‘Home’ page with general information and a “Hotels’ page where you can book a hotel. Hotels selection has various settings that will help you to make the most optimal choise.`,
            siteLink: 'https://denis-i-sedona.netlify.app/',
            codeLink: 'https://github.com/SUSocean/sedona'
        },
        {
            id: 'Color',
            name: 'Color Picker',
            isVerticaltal: false,
            mainScreenShotUrl: './src/images/colorpicker.png',
            tools: ['fa-brands fa-figma', 'fa-brands fa-github', 'fa-solid fa-gears', 'fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'],
            description: `On this website, you can choose a color pallet that works with the color of your choice. There are also several mods to choose from. `,
            siteLink: 'https://denis-i-color-picker.netlify.app/',
            codeLink: 'https://github.com/SUSocean/color-scheme-generator'
        },
        {
            id: 'Quizical',
            name: 'Quizical',
            isVerticaltal: true,
            mainScreenShotUrl: './src/images/quizical.png',
            tools: ['fa-brands fa-figma', 'fa-brands fa-github', 'fa-solid fa-gears', 'fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-react', 'fa-brands fa-js'],
            description: `On this website, you can complete tests with randomly generated questions.`,
            siteLink: 'https://denis-i-quizzical.netlify.app/',
            codeLink: 'https://github.com/SUSocean/quizzical'
        },
        {
            id: 'Start',
            name: 'Start Screen',
            isVerticaltal: false,
            mainScreenShotUrl: './src/images/startScreen.png',
            tools: ['fa-brands fa-figma', 'fa-brands fa-github', 'fa-solid fa-gears', 'fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-react', 'fa-brands fa-js'],
            description: `This website will show you the time and your current weather. In the background you will see a random picture. You can choose from several categories. Please allow the site to take your location for the best experience.`,
            siteLink: 'https://denis-i-startscreen.netlify.app/',
            codeLink: 'https://github.com/SUSocean/StartScreen'
        },
        {
            id: 'Toy',
            name: 'Toy Store',
            isVerticaltal: false,
            mainScreenShotUrl: './src/images/ToyStore.png',
            tools: ['fa-brands fa-figma', 'fa-brands fa-github', 'fa-brands fa-html5', 'fa-brands fa-css3-alt'],
            description: `This website will show you the main page of a Toy Store.`,
            siteLink: 'https://denis-igonin-toys-project.netlify.app/',
            codeLink: 'https://github.com/SUSocean/toys/tree/main/toys%20website'
        },
        {
            id: 'Watchlist',
            name: 'Watchlist',
            isVerticaltal: false,
            mainScreenShotUrl: './src/images/watchlist.png',
            tools: ['fa-brands fa-figma', 'fa-brands fa-github', 'fa-solid fa-gears', 'fa-brands fa-html5', 'fa-brands fa-css3-alt', 'fa-brands fa-js'],
            description: `This website allows you to search for movies and TV series and add them to your watch list.`,
            siteLink: 'https://denis-i-watchlist.netlify.app/',
            codeLink: 'https://github.com/SUSocean/watchlist'
        }

    ])

    return (
        <Context.Provider value={projectsData}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context } 