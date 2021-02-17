import React, {Component} from "react";
import {Switch, Route}
from "react-router-dom";
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utilites.jsx';

import './App.scss';

class App extends Component{
  constructor(){
    super();
    this.state ={
      currentUser:null
    };
  }

  unsubscribeFromAuth = null;

    // Firebase bolerplate to auth and remove auth
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          },
            () => {console.log(this.state)}
          );
      })
      } else {
        this.setState({currentUser:userAuth})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 // --------------------------------------------------

  render() {
    return (
      <div>
      <Header currentUser= {this.state.currentUser}/>
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