import './App.css';
import React, {useState, createContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import mainPage from './routes/Mainpage';
import loginPage from './routes/loginPage';
import cartPage from './routes/cartPage';


function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route component={mainPage}/>
          <Route component={loginPage}/>
          <Route component={cartPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
