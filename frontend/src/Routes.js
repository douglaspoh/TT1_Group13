import './App.css';
import React, {useState, createContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import mainPage from './routes/Mainpage';
import loginPage from './routes/loginPage';
import cartPage from './routes/cartPage';

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

