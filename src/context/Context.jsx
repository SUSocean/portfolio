import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider(props) {

    const [navOptions, setNavOptions] = useState()

    return (
        <Context.Provider value={'yo'}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }