import React, { ReactNode } from 'react'

const RootLaout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            Navbar
            {children}
            Footer
        </div>
    )
}

export default RootLaout
