import React from "react";

import Navigation from "./HomeComponents/Navigation";
import Welcome from "./HomeComponents/Welcome";

function Home() {
    return (
        <div id="HOME" className='startScreen-container'>
            <Navigation />
            <Welcome />
        </div>
    )
}

export default Home