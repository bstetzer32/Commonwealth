import React from "react";
import { createContext, useState } from 'react'

export const PageContext = createContext()

export function PageProvider(props) {
    const [pageType, setPageType] = useState('home')
    const [pageId, setPageId] = useState(0)

    return (
        <PageContext.Provider value={{
            type: {pageType, setPageType},
            id: {pageId,
            setPageId}
        }}>
            {props.children}
        </PageContext.Provider>
    )
}