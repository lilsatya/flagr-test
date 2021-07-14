import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AbTesting, FeatureFlagging } from './containers'
import './App.css';

const App = () => {
  return (
    <div className="flex">
      <Router>
        <div className="flex-1 h-screen p-4">
          <nav>
            <ul>
              <li>
                <Link to="/ab-test">AB Testing</Link>
              </li>
              <li>
                <Link to="/feature-flag">Feature Flagging</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-2 w-100 container border-2 h-screen p-4">
          <Switch>
            <Route path="/ab-test">
              <AbTesting />
            </Route>
            <Route path="/feature-flag">
              <FeatureFlagging />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
