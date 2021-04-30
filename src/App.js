import { Redirect, Route, Switch } from 'react-router-dom';
import React, { Component} from 'react';
import './App.css';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends Component {

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.props.onCheckUserSession()
    // this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    //   console.log(userAuth)
    //   if(userAuth){
    //     const userRef= await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot=>{
    //       this.props.setCurrentUser({
    //           id:snapShot.id,
    //           ...snapShot.data()
    //       })
    //     })
    //   }
    //   this.props.setCurrentUser(userAuth)
    // })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  

  render(){

    return (
      <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' render={()=> this.props.currentUser ? <Redirect to='/'/>:<SignInAndSignUpPage />}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch=>({
  onCheckUserSession: ()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
