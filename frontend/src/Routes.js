import './App.css';
import React, { useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MainPage from './routes/MainPage';
import LoginPage from './routes/LoginPage';
import CartPage from './routes/CartPage';
import PrivateCart from './routes/PrivateCart'
import data from './data';

export const authContext = createContext();
export const cartContext = createContext();

function Routes() {
  const auth = useProvideAuth()
  const cartOperations = useCartOperations();

  return (
    <div className="App">
      <authContext.Provider value={auth}>
      <cartContext.Provider value={cartOperations}>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={LoginPage}/>
            <PrivateCart component={CartPage} />
            <Route path='*' component={() => '404 PAGE NOT FOUND'} />
          </Switch>
        </BrowserRouter>
      </cartContext.Provider>  
      </authContext.Provider>
    </div>
  );
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    setUser('user');
    cb();
  }

  const signout = (cb) => {
    setUser(null);
    cb();
  }

  return { user, signin, signout }
}


function useCartOperations() {
  const {products} = data;
  const [cartList,setCartList] = useState([]);

  const onAdd = (product) => {
    const inCart = cartList.find(item=>item.id===product.id)
    if(inCart){
      setCartList(
      cartList.map((item)=>item.id===product.id?{...inCart,qty:inCart.qty+1}:item
      ))
      console.log(cartList)
    } else{
      setCartList(
        [...cartList,{...product,qty:1}]
      )
      console.log(cartList)
    }
  };


}


export default Routes;

