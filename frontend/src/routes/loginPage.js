import React, {useState} from 'react'

const LoginPage =() => {
    const [user, setUser] = useState({id:"", username:"", password:""});

    return (
        <div>
                <label>Username</label>
                <input type="text">

                </input>
                <label>Password</label>
                <input type="text">

                </input>
                <button type="submit">Login</button>

        </div>
    )
}

export default LoginPage
