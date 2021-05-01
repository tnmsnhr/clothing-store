import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import React, { useEffect} from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {selectCurrentUser} from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = props=> {

  useEffect(()=>{
    props.onCheckUserSession()
  },[])
  
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={()=> props.currentUser ? <Redirect to='/'/>:<SignInAndSignUpPage />}/>
      </Switch>
    </div>
  )
}

const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch=>({
  onCheckUserSession: ()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
