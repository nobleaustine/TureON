import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes as Switch, Route} from 'react-router-dom'

import Home from './pages';


function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' element={<Home/>} />
      </Switch>
    </Router>
  );
}

export default App;

//      import SigninPage from './pages/signin';
//  <Route path='/signin' element={<SigninPage/>} />

