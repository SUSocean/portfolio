import React, { useContext } from 'react'
import { Context } from '../context/Context'




function Navigation() {

    const {
        handleMouseEnter,
        handleMouseLeave } = useContext(Context)

    const navLinks = ['ABOUT', 'WORK', 'CONTACT']
    const navObj = navLinks.map(link => {
        return (
            <li
                className={`navigation-container--navigation--nav`}
                key={link}
            ><a className='navigation-container--navigation--nav--link' href="#"
                name={link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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