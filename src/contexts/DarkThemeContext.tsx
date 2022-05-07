import React, { createContext, useContext } from "react"
import { useState } from "react"

const DarkThemeContext = createContext<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}>({
  isDarkMode: true,
  toggleDarkMode: undefined,
})

const DarkThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode ]= useState(true)
  const toggleFunction = () => {
    setIsDarkMode(prevState => !prevState)
  }

  return (
    <DarkThemeContext.Provider
      value={{ isDarkMode, toggleDarkMode: toggleFunction }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
}

const useDarkThemeContext = () => useContext(DarkThemeContext)

export { DarkThemeContext, DarkThemeProvider, useDarkThemeContext }
