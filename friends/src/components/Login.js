// Library imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Default values
const defaultFormValues = {
    username: '',
    password: '',
}

function Login() {
    const [credentials, setCredentials] = useState(defaultFormValues);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

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
                setIsLoading(false);
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                history.push('/friends-list');
            })
            .catch(err => {
                setIsLoading(false);
                console.error(err.response);
            })
    }

    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={login}>

                <label htmlFor='username'>Username</label>
                <input 
                    type='text'
                    name='username'
                    id='username'
                    value={credentials.username}
                    onChange={handleChange}
                />

                <label htmlFor='password'>Password</label>
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

export default Login;
