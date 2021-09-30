import './App.css';
import React, {useState, createContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './NavBar';
import mainPage from './routes/MainPage';
import loginPage from './routes/LoginPage';
import PrivateCart from './routes/PrivateCart';
import cartPage from './routes/CartPage';

export const authContext = createContext();

function Routes() {
  const auth = useProvideAuth()

  return (
    <div className="App">
      <authContext.Provider value={auth}>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route component={mainPage}/>
            <Route component={loginPage}/>
            <PrivateCart component={cartPage}/>
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

