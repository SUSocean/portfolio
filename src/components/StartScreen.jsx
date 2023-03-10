import React from "react";

import Navigation from "./Navigation";
import Welcome from "./Welcome";

function StartScreen() {
    return (
        <div id="HOME" className='startScreen-container'>
            <Navigation />
            <Welcome />
        </div>
    )
}

export default StartScreen