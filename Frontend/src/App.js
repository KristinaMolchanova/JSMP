import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route component={ LoginPage } pass='/login' exact/>
          <Route pass='/' exact><h1>dfgrehes</h1></Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
