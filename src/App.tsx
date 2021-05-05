import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';
import NewPassword from './components/NewPassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route
              exact path="/"
              component={Home}
            />
            <Route
              exact path="/signup"
              component={SignUp}
            />
            <Route
              exact path="/login"
              component={Login}
            />
            <Route
              exact path="/password-reset"
              component={PasswordReset}
            />
            <Route
              path="/reset-password/:token"
              component={NewPassword}
            />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
