import React,{useContext} from 'react'
import {Route,Redirect} from 'react-router-dom';
import {authContext} from './Routes';

function PrivateRoute({component:cartPage, ...rest}) {
    const auth = useContext(authContext);
    return (
        <Route {...rest}
            render = {routeProps => auth.user ? <cartPage {...routeProps}/>
                                         : <Redirect to = '/login'/>} 
        />
    )
}

export default PrivateRoute;
