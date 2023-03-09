import React from 'react'

function Navigation() {
    const navLinks = ['ABOUT', 'WORK', 'CONTACT']
    const navObj = navLinks.map(link => {
        return (
            <li
                className={`navigation-container--navigation--nav`}
                key={link}
            ><a className='navigation-container--navigation--nav--link'
                href={`/${link}`}
            >{`{ ${link} }`}</a></li>
        )
    })


    return (
        <nav className='navigation-container'>
            <ul className='navigation-container--navigation'>
                {navObj}
            </ul>
        </nav>
    )
}

export default Navigation