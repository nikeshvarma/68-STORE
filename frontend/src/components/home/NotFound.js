import React from 'react';
import {BiError} from "react-icons/all";

const NotFound = () => {
    return (
        <div className="text-center not-found">
            <h1 className="display-1">Page</h1>
            <h1 className="display-1">Not Found 404!</h1>
            <BiError size="8rem" color="red"/>
        </div>
    );
};

export default NotFound;