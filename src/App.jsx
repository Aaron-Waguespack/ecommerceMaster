import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { connect } from 'react-redux';
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utilites.jsx';
import {setCurrentUser} from './redux/user/user.actions';
import './App.scss';

class App extends Component{
  unsubscribeFromAuth = null;

    // Firebase bolerplate to auth and remove auth
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          });
          // console.log(this.state)
      });
    }
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
 // --------------------------------------------------

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,
                      mapDispatchToProps)(App);