import React from 'react';
import {useHistory} from "react-router-dom";

import {useDispatch} from "react-redux";
import {setAuthFalse} from "../../redux/auth/auth.action";

const Logout = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    dispatch(setAuthFalse());
    history.push('/');

    return (
        <>

        </>
    );
};

export default Logout;