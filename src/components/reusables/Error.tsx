import React from 'react';

interface ErrorProps {
    error : {
        message: string;
        stack: string;
    }
}

const Error: React.SFC<ErrorProps> = ({error}) => {
    return !(typeof error === "undefined" || error.message === "") ? (
        <div><h2>Error, try another search</h2></div>
    ) : null;
}

export default Error;