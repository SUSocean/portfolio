import React, { useEffect, useState } from 'react'

function Welcome() {
    const welcomeArray = [...'WELCOME']

    const WelcomeObj = welcomeArray.map(symbol => {
        return (<span onMouseEnter={handleEnter} onMouseLeave={handleOExit} key={Math.random()}> {symbol}</span >)
    })

    function handleEnter(event) {
        closeText(event.target)
    }

    function handleOExit(event) {
        openText(event.target)
    }

    function closeText(letter) {
        letter.style.webkitAnimationName = 'closeText'
        letter.style.webkitAnimationDuration = '.7s'
        setTimeout(() => {
            letter.style.webkitTextStroke = '20px #f7f7f2'
        }, 600)
    }

    function openText(letter) {
        letter.style.webkitAnimationName = 'openText'
        letter.style.webkitAnimationDuration = '.7s'
        setTimeout(() => {
            letter.style.webkitTextStroke = '20px #63A088'
        }, 600)
    }

    return (
        <div className='welcome-container'>
            {WelcomeObj}
        </div>
    )
}

export default Welcome


// -webkit-text-stroke: 1px red