import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

export function Login(): JSX.Element {

    const { authenticate } = useLogin()
    const [logged, setLogged] = useState(true);
    const navigate = useNavigate();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const { email, password } = document.forms[0];
        const login = authenticate(email.value, password.value);
        setLogged(login);
        login && navigate('/main')
    };

    return (
        <div className="App">
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Sign In</h3>

                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name="email"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name="password"
                            />
                        </div>
                        {logged ? <></> : <div className="alert alert-danger" role="alert">Wrong email or password. Try again.</div>}

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
