import React from 'react';
import {Link, NavLink, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {setAuthTrue} from "../../redux/auth/auth.action";
import {useDispatch} from "react-redux";
import {domainName} from '../../index';

const SignUp = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors}, setError} = useForm();


    const onSubmit = async data => {
        await axios.post(
            '/api/auth/sign-up/',
            data
        )
            .then((res) => {
                dispatch(setAuthTrue(res.data))
                history.push('/')
            })
            .catch((err) => setError('phone_number', {type: 'string', message: err?.response?.data['phone_number'][0]}))
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand p-2 mb-0 h1" to="/">
                        68 Store
                    </NavLink>
                </div>
            </nav>

            <div className="form-wrapper shadow">
                <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
                    <div className="auth-logo">
                        <img src={domainName + "/static/images/logo.svg"} alt="logo" height="50" width="50"/>
                        <h3>Store</h3>
                    </div>
                    <div className="form-group mb-3">
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name"
                               className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                               {...register("name", {required: true, maxLength: 100})}
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Mobile Number</label>
                        <input type="tel" placeholder="Mobile Number"
                               className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
                               {...register("phone_number", {
                                   required: true, minLength: {value: 10, message: "Invalid Phone Number"},
                                   maxLength: {value: 10, message: "Invalid Phone Number"}
                               })
                               }
                        />

                        <div className="invalid-feedback">
                            {errors.phone_number?.message}
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label>Email address</label>
                        <input type="email" placeholder="Email"
                               className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                               {...register("email", {required: true})}
                        />

                        <div className="invalid-feedback">
                            {errors.email?.message}
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <label>Password</label>
                        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password"
                               {...register("password", {required: true, maxLength: 20, minLength: 5})}
                        />

                        <div className="invalid-feedback">
                            {errors.password?.type === 'minLength' && "Password is too short"}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-5 btn-block">Sign Up</button>

                    <p className="forgot-password text-center">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default SignUp;