import React, { useState, useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { authContext } from '../Routes';
import app from "../firebase";

const firebaseauth = app.auth();

const LoginPage = () => {
    const auth = useContext(authContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = async (event) => {
        event.preventDefault();
      };

    const login = async (username, password) => {
        try {
            console.log("Logging in");
          await firebaseauth.signInWithEmailAndPassword(username, password);
          history.push('/');
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

    return (
        <div className='loginpage'>
            <form onSubmit={handleSubmit}>
                <div className='formitem'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' onChange={(e) => { setUsername(e.target.value) }} value={username} name='username' />
                </div>
                <div className='formitem'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password} name='password' />
                </div>
                <button type='submit' onClick={() => login(username, password)}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage