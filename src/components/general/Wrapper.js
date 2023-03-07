import React from 'react'

const Wrapper = ({ children }) => {

    React.useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}

export default Wrapper