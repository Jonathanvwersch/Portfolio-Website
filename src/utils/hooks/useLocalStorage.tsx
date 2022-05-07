import { useEffect, useState } from "react"

const isBrowser = typeof window !== "undefined"

// use in place of usestate for state variables you wish to save in local storage
function useLocalStorage<T>(defaultValue: T, key: string) {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = isBrowser ? window.localStorage.getItem(key) : null
    console.log({stickyValue})
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })
  console.log({value})
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return { value, setValue }
}

export default useLocalStorage
