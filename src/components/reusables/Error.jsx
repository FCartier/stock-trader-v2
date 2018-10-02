import React from 'react'

const Error = props => {
    const { error } = props
    return (
        <div>
            {error && 
             <h2>Error, try another search</h2>
            }
        </div>
    )
}

export default Error;