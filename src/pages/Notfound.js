import React from 'react';

export const Notfound = ({ errorCode })=> {
    return (
        <>
        <h1>Page Not Found</h1>
        <p>Error Code: {errorCode}</p>
        </>
    );
}

export default Notfound;