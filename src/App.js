import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/pages/homepage/homepage.component';



const HatsPage = () => {
  return (
  <div>
  <h1>HAT PAGE</h1>
  </div>
  );
};

function App() {
  return (
    <div>
      <Route extact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
