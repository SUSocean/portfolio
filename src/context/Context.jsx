import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider(props) {

    return (
        <Context.Provider value={'something'}>
            {props.children}
        </Context.Provider >
    )
}

export { ContextProvider, Context }