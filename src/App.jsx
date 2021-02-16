import React, {Component} from "react";
import {Switch, Route}
from "react-router-dom";
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'

import Header from './components/header/header.component.jsx'
import {auth} from './firebase/firebase.utilites.jsx'

import './App.scss'

class App extends Component{
  constructor(){
    super();
    this.state ={
      currentUser:null
    }
  }

componentDidMount(){
  auth.onAuthStateChanged(user => {
    this.setState({currentUser:user});
    console.log(user);
  })

}

  render() {
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
};
export default App;