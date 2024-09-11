import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';


function LoginPage() {
    const [formdata, setFormdata] = useState({
        username: "",
        password: ""
    });
    
    const [Errors, setErrors] = useState({});
    const navigate=useNavigate()
    
    const validate = () => {
        let validationErrors = {};
    
        if (!formdata.username) {
            validationErrors.username = "Username is required";
        }
    
        if (!formdata.password) {
            validationErrors.password = "Password is required";
        }
    
        return validationErrors;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
       
    
        if (Object.keys(validationErrors).length === 0) {
          console.log('submitted')
        
         navigate('/home')
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='login-container'>
            <div className='Login-Box'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formdata.username}
                        onChange={handleChange}
                    />
                    {Errors.username && <p className="error-message">{Errors.username}</p>}

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formdata.password}
                        onChange={handleChange}
                    />
                    {Errors.password && <p className="error-message">{Errors.password}</p>}

                    <button type="submit">Login</button>
                            <br />
                            <p>Don't have an account?</p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;