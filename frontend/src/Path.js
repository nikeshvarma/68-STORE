import React from 'react';
// import {useSelector} from "react-redux";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/home/NotFound";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Logout from "./components/auth/Logout";


const Path = () => {

    // const ProtectedRoute = ({component: Component, ...rest}) => {
    //
    //     const isAuth = useSelector(state => state.auth.isAuth)
    //
    //     return (
    //         <Route {...rest}
    //                render={
    //                    props => isAuth ? <Component {...props}/> : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    //                }
    //         />
    //     );
    // };

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Route exact path="/logout" component={Logout}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
};

export default Path;