import React, {useState, useContext, createContext} from 'react'

const Context = createContext({
  
})
const {Provider, Consumer} = Context

function ThemeContextProvider({children}) {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <Provider value={{
      darkMode: darkMode,
      setDarkMode: () => setDarkMode(!darkMode)
    }
    
      }>
      {children}
    </Provider>
  )

}
const ThemeContext = () => useContext(Context)
export { ThemeContextProvider, ThemeContext, Consumer as ThemeContextConsumer }