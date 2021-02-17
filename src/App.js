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
    <>
      <ThemeContextConsumer>
        {({ darkMode, setDarkMode }) => (
          <HeaderContainer darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
      </ThemeContextConsumer>
      <Home />
    </>
  );
}

export default App;
