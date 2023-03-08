import React, { useEffect, useState } from 'react'

function Welcome() {
    const welcomeArray = [...'WELCOME']

    const WelcomeObj = welcomeArray.map(symbol => {

        return (<p onMouseEnter={handleEnter} onMouseLeave={handleOExit} key={Math.random()}> {symbol}</p >)
    })

    function handleEnter(event) {
        event.target.style.color = 'red'
    }

    function handleOExit(event) {
        event.target.style.color = 'yellow'
    }


    return (
        <div className='welcome-container'>
            {WelcomeObj}
        </div>
    )
}

export default Welcome


// -webkit-text-stroke: 1px red