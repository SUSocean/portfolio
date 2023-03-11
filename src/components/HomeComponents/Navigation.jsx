import React, { useState, useEffect } from 'react'

function Navigation() {
    function getScrollPosition() {
        const [scrollPosition, setScrollPosition] = useState(0);

        useEffect(() => {
            const updatePosition = () => {
                setScrollPosition(window.pageYOffset);
            }
            window.addEventListener("scroll", updatePosition);
            updatePosition();
            return () => window.removeEventListener("scroll", updatePosition);
        }, []);

        return scrollPosition;
    };

    const position = getScrollPosition()
    function navStyles() {
        if (position > 60) {
            return {
                position: 'fixed',
                right: '100px',
                top: '25px',
                fontSize: '1.5rem'
            }
        } else null
    }

    const linkStyles = {
        fontWeight: 'bold',
    }

    return (
        <nav className='start-screen--navigation-container'>
            <ul style={navStyles()} className='start-screen--navigation-container--navigation'>
                <li
                    className='start-screen--navigation-container--navigation--nav'
                    style={position < 664 ? linkStyles : {}}
                    key='1'>
                    <a href='#HOME' className='start-screen--navigation-container--navigation--nav--link'>HOME</a>
                </li>
                <li
                    className='start-screen--navigation-container--navigation--nav'
                    style={position >= 665 ? linkStyles : {}}
                    key='2'>
                    <a href='#ABOUT' className='start-screen--navigation-container--navigation--nav--link'>ABOUT</a>
                </li>
                <li
                    className='start-screen--navigation-container--navigation--nav'
                    key='3'>
                    <a href='#WORK' className='start-screen--navigation-container--navigation--nav--link'>WORK</a>
                </li>
                <li
                    className='start-screen--navigation-container--navigation--nav'
                    key='4'>
                    <a href='#CONTACT' className='start-screen--navigation-container--navigation--nav--link'>CONTACT</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation