import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { HeaderContainer } from './containers/header'
import {
  Home,
  About,
  Contact,
  Projects
} from './pages'

function App() {
  return (
    <Router>
    <HeaderContainer />
      <Switch>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
        <Route path={ROUTES.CONTACT}>
          <Contact/>
        </Route>
        <Route path={ROUTES.PROJECTS}>
          <Projects />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
