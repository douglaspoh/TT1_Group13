import React, {useState} from 'react'

const LoginPage =() => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const login = (e) => {
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
            </form>
        </div>
    )
}

export default LoginPage
