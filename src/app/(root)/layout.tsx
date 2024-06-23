import React, { ReactNode } from 'react'

const RootLaout = ({ children }: { children: ReactNode }) => {
    return (
        <main>

            {children}
            Footer
        </main>
    )
}

export default RootLaout
