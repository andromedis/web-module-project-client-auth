import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path='friends-list' />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
