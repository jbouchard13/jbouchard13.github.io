import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/pages/Main';
import Contacts from './components/pages/Contacts';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Route exact path='/' component={Main} />
        <Route exact path='/contacts' component={Contacts} />
      </Router>
    </div>
  );
}

export default App;
