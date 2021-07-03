import React, {useState} from 'react';
import {Link, NavLink, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {setAuthTrue} from '../../redux/auth/auth.action';
import {useDispatch} from "react-redux";
import "../../style/auth.scss";
import axios from "axios";
import {domainName} from "../../index";

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] = useState(null);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async data => {
        await axios.post(
            '/api/auth/login/',
            data
        )
            .then((res) => {
                dispatch(setAuthTrue(res.data))
                history.push('/');
            })
            .catch((err) => setError(err?.response?.data['error']))
    }


    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand mb-0 p-2 h1" to="/">
                        68 Store
                    </NavLink>
                </div>
            </nav>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="form-wrapper-login shadow">
                <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
                    <div className="auth-logo">
                        <img src={domainName + "/static/images/logo.svg"} alt="logo" height="50" width="50"/>
                        <h3>Store</h3>
                    </div>

                    <div className="form-group mb-3">
                        <label>Mobile Number</label>
                        <input type="tel" placeholder="Mobile Number" maxLength="10"
                               className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
                               {...register("phone_number", {required: true})}
                        />

                        <div className="invalid-feedback">
                            {errors.phone_number?.message}
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label>Password</label>
                        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password"
                               {...register("password", {required: true})}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-5 mt-3 btn-block">Login</button>

                    <p className="forgot-password">
                        Forgot <Link to="/forget-password">password?</Link>
                    </p>

                    <p>
                        Don't have an account? <Link to="/sign-up">sign up</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default Login;