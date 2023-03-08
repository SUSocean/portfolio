import React, { useContext } from 'react'

import { Context } from '../context/Context'

function Navigation() {

    const thing = useContext(Context)
    return (
        <nav className='navigation-container'>
            <p>navigation</p>
        </nav>
    )
}

export default Navigation