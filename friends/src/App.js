import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Switch>
          <PrivateRoute path='friends-list' component={FriendsList}/>
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch> */}
        <FriendsList />
      </div>
    </Router>
  );
}

export default App;
