import React from 'react'

function Navigation() {
    const navLinks = ['HOME', 'ABOUT', 'WORK', 'CONTACT']
    const navObj = navLinks.map(link => {
        return (
            <li
                className='start-screen--navigation-container--navigation--nav'
                key={link}>
                <a href={`#${link}`} className={`start-screen--navigation-container--navigation--nav--link ${link}`}>{link}</a>
            </li>
        )
    })
    return (
        <nav className='start-screen--navigation-container'>
            <ul className='start-screen--navigation-container--navigation'>
                {navObj}
            </ul>
        </nav>
    )
}

export default Navigation