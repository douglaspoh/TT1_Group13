import React, { useState, useContext } from 'react'
import {authContext} from '../Routes';
import axios from "axios";

const LoginPage =() => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const login = (e) => {
        const userData = {
            email: username,
            password: password,
        };

        axios
            .post("/logins", userData)
            .then((response) => {
                localStorage.setItem(
                    "AuthToken",
                    `Bearer ${response.data.token}`
                );
                // alert("Successful token:" + response.data.token);
                alert("Successful login!")
            })
            .catch((error) => {
                alert(error)
            });
        return;
    }

    return (
        <div className='loginpage'>
            <form onSubmit={login}>
                <div className='formitem'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' onChange={(e)=>{setUsername(e.target.value)}} value={username} name='username'/>
                </div>
                <div className='formitem'>
                    <label htmlFor='password'>Password:</label>
                    <input type='text' onChange={(e)=>{setPassword(e.target.value)}} value={password} name='password'/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
