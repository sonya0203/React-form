
import React, { useState } from "react"
const context = React.createContext()

const ContextProvider = ({ children }) => {
const name='sanjay'
    return (
        <context.Provider value={name} >
            {children}
        </context.Provider>
    )
}
export { context, ContextProvider }