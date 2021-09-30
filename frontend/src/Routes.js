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

  const signin = async (username, password) => {
		const respond = await fetch('', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify(username, password),
		})

		const data = await respond.json();
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

  const onRemove = (product) => {
    if(product.qty===1){
      setCartList(
        cartList.filter((item)=>item.id!==product.id)
      )
    } else{
      setCartList(
        cartList.map((item)=>item.id===product.id?{...item,qty:item.qty-1}:item)
      )
    }
  }

  const onDelete = (product) =>{
    setCartList(
      cartList.filter((item)=>item.id!==product.id)
    )
  } 
  
  return {cartList, onAdd, onRemove, onDelete};
  
}


export default Routes;

