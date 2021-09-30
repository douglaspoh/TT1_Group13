import './App.css';
import React, {useState, createContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import MainPage from './routes/MainPage';
import LoginPage from './routes/LoginPage';
import CartPage from './routes/CartPage';
import PrivateCart from './routes/PrivateCart'


export const authContext = createContext();

function Routes() {
  const auth = useProvideAuth()

  return (
    <div className="App">
      <authContext.Provider value={true}>
        <BrowserRouter>
          {/* <NavBar/> */}
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route path='/login' component={LoginPage}/>
            <PrivateCart component={CartPage}/>
            <Route path='*' component={()=>'404 PAGE NOT FOUND'}/>
          </Switch>
        </BrowserRouter>
      </authContext.Provider>
    </div>
  );
}

function useProvideAuth() {
  const [user,setUser] = useState(null);

  const signin = (cb) => {
    setUser('user');
    cb();
  }

  const signout = (cb) => {
    setUser(null);
    cb();
  }

  return {user,signin,signout}
}


export default Routes;

