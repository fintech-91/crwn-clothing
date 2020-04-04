import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInAndSignUpPage from './components/pages/signInAndSignOut/signInAndSignOut.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils.jsx';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
  
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
           //console.log(this.state);
          });
          
        });
        
      }
      this.setState({ currentUser: userAuth });
     });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
 
}

export default App;
