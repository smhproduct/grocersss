import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../redux/grocersssSlice';
import Spinner from './../Spinner/Spinner';
import { Alert } from 'reactstrap';

const Auth = () => {
    const [mode, setMode] = useState('Sign Up');
    const dispatch = useDispatch();
    const authLoading = useSelector(state => {
        return state.authLoading
    })
    const authFailedMsg = useSelector(state => {
        return state.authFailedMsg
    })

    let err = null;
    let errMsg = null;
    if (authFailedMsg !== null) {
        if (authFailedMsg === 'INVALID_PASSWORD') errMsg = 'The Password is invalid';
        if (authFailedMsg === 'EMAIL_EXISTS') errMsg = 'The email already exists';
        if (authFailedMsg === 'EMAIL_NOT_FOUND') errMsg = 'The email is not registered';
        err = <Alert color='danger'>{errMsg}</Alert>
    }
    let form = null;
    if (authLoading) {
        form = (<Spinner />)
    } else {
        form = (
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    passwordConfirm: "",
                }}
                onSubmit={
                    (values) => {
                        console.log(values)
                        dispatch(auth(values.email, values.password, mode))
                    }
                }
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 6) {
                        errors.password = 'Must be atleast 6 characters!';
                    }

                    if (mode === "Sign Up") {
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = 'Password field does no match!';
                        }
                    }
                    return errors;
                }}
            >
                {({ values, handleChange, handleSubmit, errors }) => (
                    <div style={{
                        border: '1px grey solid',
                        padding: '15px',
                        borderRadius: '8px',
                    }}>
                        <button style={{
                            width: '100%',
                            backgroundColor: '#D70F64',
                            color: 'white',
                        }} onClick={() => setMode(mode === "Sign Up" ? "Login" : "Sign Up")}>Switch to {mode === 'Sign Up' ? 'Login' : 'Sign Up'}</button>
                        <br /> <br />
                        <form onSubmit={handleSubmit}>
                            <input
                                name="email"
                                placeholder='Enter Your Email'
                                className='form-control'
                                value={values.email}
                                onChange={handleChange}
                            />
                            <span style={{ color: 'red' }}>{errors.email}</span>
                            <br />
                            <input
                                name="password"
                                placeholder='Enter Your Password'
                                className='form-control'
                                value={values.password}
                                onChange={handleChange}
                            />
                            <span style={{ color: 'red' }}>{errors.password}</span>
                            <br />
                            {mode === "Sign Up" ? <div>
                                <input
                                    name="passwordConfirm"
                                    placeholder='Enter Your Password Again'
                                    className='form-control'
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                />
                                <span style={{ color: 'red' }}>{errors.passwordConfirm}</span>
                                <br />
                            </div> : null}

                            <button type='submit' className='btn btn-success'>{mode === "Sign Up" ? "Sign Up" : "Login"}</button>
                        </form>

                    </div>)}
            </Formik>

        )
    }
    return (
        <div>
            <div className='container'>
                {err}
                {form}
            </div>
        </div>
    );
};

export default Auth;