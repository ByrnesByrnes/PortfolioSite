import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App';
import * as ROUTES from './constants/routes'

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Switch>
      <Route>

      </Route>
    </Switch>
  </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
