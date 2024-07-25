import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SavedBooks from './pages/SavedBooks';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;