import React, { useState, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { authContext } from '../Routes';

const LoginPage = () => {
    const auth = useContext(authContext);
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const login = (e) => {
        e.preventDefault();
        // console.table();
        
        /* fetch('http://localhost:3005/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res=>{
            if(!res.ok){
                console.log('Error!');
            }
            return res.text();
        })
        .then(data=>{
            if(data==='Login success'){
                history.push('/');
                auth.signin({userId, username, password});                 
            } else {
            console.log(data);
            setUsername('');
            setPassword('');
            }
        })
        .catch(err=>{
            console.log(err)
        });      */

        // auth.signin(username);
        history.push('/');
        auth.signin({userId, username, password}); 
        
    }

    return (
        <div className='loginpage'>
            <form onSubmit={login}>
                <div className='formitem'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' onChange={(e) => { setUsername(e.target.value) }} value={username} name='username' />
                </div>
                <div className='formitem'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password} name='password' />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
