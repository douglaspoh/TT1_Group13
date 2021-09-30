import React, { useState, useContext } from 'react'
import {authContext} from '../Routes';

const LoginPage = () => {
    const auth = useContext(authContext);
    const [user, setUser] = useState({ username: "", password: "" });

    const onSubmit =(e) =>{
        e.preventDefault();
        console.log(user)

        setUser({ username:"",password:"" });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username</label>
                <input type="text" value={user.username} onChange={(e)=>setUser({...user, username:e.target.value})}/>

                <label>Password</label>
                <input type="text" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage
