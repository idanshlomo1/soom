import React, { ReactNode } from 'react'

const RootLaout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            Navbar
            {children}
            Footer
        </main>
    )
}

export default RootLaout
