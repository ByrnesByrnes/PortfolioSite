import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { ThemeContextConsumer } from './context/themeContext'
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
      <ThemeContextConsumer>
        {({ darkMode, setDarkMode }) => (
          <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
      </ThemeContextConsumer>
      <Switch>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
        <Route path={ROUTES.CONTACT}>
          <Contact />
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
