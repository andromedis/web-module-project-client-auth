// Library imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Default values
const defaultFormValues = {
    username: '',
    password: '',
}

export default function Login() {
    // State
    const [credentials, setCredentials] = useState(defaultFormValues);
    const [isLoading, setIsLoading] = useState(false);

    // History object
    const { push } = useHistory();

    // Event handlers
    const handleChange = evt => {
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value,
        })
    };

    const login = evt => {
        evt.preventDefault();
        setIsLoading(true);

        axios.post('http://localhost:5000/api/login/', credentials)
            .then(res => {
                console.log(res);
                setIsLoading(false);
                localStorage.setItem('token', res.data.payload);
                push('/friends-list');
            })
            .catch(err => {
                console.error(err.response);
                setIsLoading(false);
            })
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={login}>

                <label htmlFor='username' >Username</label>
                <input 
                    type='text'
                    name='username'
                    id='username'
                    value={credentials.username}
                    onChange={handleChange}
                />

                <label htmlFor='password' >Password</label>
                <input 
                    type='password'
                    name='password'
                    id='password'
                    value={credentials.password}
                    onChange={handleChange}
                />

                <button>Submit</button>
                { isLoading ? <h2>Loading...</h2> : null }

            </form>
        </div>
    )
}
