import React from 'react';
import { Switch,Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInAndSignUpPage from './components/pages/signInAndSignOut/signInAndSignOut.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils.jsx';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
  
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
              ...snapshot.data()
            
          }, () => {
           //console.log(this.state);
          });
          
        });
        
      }
      setCurrentUser(userAuth );
     });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
 
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});
export default connect(null,mapDispatchToProps)(App);
