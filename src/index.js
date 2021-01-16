import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './globalStyles'
import { ThemeContextProvider, ThemeContextConsumer} from './context/themeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeContextConsumer>
        {({ darkMode }) => (
          <GlobalStyle darkMode={darkMode} />
        )}
      </ThemeContextConsumer>

      <App />
    </ThemeContextProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);
