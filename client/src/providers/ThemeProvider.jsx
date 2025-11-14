import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export function useTheme() {
  return useContext(ThemeContext)
}
