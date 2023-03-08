import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider(props) {

    function handleMouseEnter(event) {
        if (event.target.name) {
            event.target.className = `navigation-container--navigation--nav--link ${event.target.name}`
        }
    }
    function handleMouseLeave(event) {
        if (event.target.name) {
            event.target.className = 'navigation-container--navigation--nav--link'
        }
    }



    return (
        <Context.Provider value={
            {
                handleMouseEnter: handleMouseEnter,
                handleMouseLeave: handleMouseLeave
            }}
        >
            {props.children}
        </Context.Provider >
    )
}

export { ContextProvider, Context }