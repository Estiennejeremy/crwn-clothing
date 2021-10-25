import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch , Route} from 'react-router-dom';

import {HomePage}
  from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.compenent'
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/auth/sign-in-and-sign-up.component';


function App() {
  return (
      <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/singIn' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
  );
}

export default App;
