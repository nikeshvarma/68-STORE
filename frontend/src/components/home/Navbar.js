import React from 'react';
import {NavLink} from "react-router-dom";
import './../../style/header.scss';
import {domainName} from "../../index";
import {useSelector} from "react-redux";

const Navbar = () => {

    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <button className="sidebar-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
                            aria-controls="sidebar">
                        &#x2630;
                    </button>

                    <NavLink className="navbar-brand-text" to="/">
                        68 Store
                    </NavLink>

                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar" aria-labelledby="sidebar">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title w-100" id="sidebar">
                                <div className="sidebar-logo">
                                    <img src={domainName + "/static/images/logo.svg"} alt="logo" height="50" width="50"/>
                                    <h1>Store</h1>
                                </div>
                            </h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"/>
                        </div>

                        <div className="offcanvas-body">
                            <hr style={{marginTop: 0}}/>
                            <ul className="nav flex-column" id="sidebar-menu">
                                {!isAuth ?
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">Login</NavLink>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;