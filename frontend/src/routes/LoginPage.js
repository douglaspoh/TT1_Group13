import React, {useState,useContext} from 'react'
import {useHistory, useLocation} from 'react-router-dom';
import { authContext } from '../Routes';

const LoginPage =() => {
    const auth = useContext(authContext);
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const login = (e) => {
        e.preventDefault();
        console.log(username + " - " +password)
        auth.signin(username, password);
        setUsername('');
        setPassword('');
        // fetch('http://localhost:3005/login', {
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: username,
        //         password: password
        //     })
        // })
        // .then(res=>{
        //     if(!res.ok){
        //         console.log('Error!');
        //     }
        //     return res.text();
        // })
        // .then(data=>{
        //     if(data==='Login success'){
        //         auth.signin(()=>history.replace(from));                
        //     } else {
        //     console.log(data);
        //     setUsername('');
        //     setPassword('');
        //     }
        // })
        // .catch(err=>{
        //     console.log(err)
        // });      
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
