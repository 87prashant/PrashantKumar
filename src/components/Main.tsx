import { PropsWithChildren } from "react"
import React from 'react'
const Main : React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="flex mx-auto flex-column container max-w-4xl px-4 pb-6">
            {children}
      </div>
    )
}

export default Main