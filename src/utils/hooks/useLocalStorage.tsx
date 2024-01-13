import { useEffect, useState } from "react"

const isBrowser = typeof window !== "undefined"

// use in place of usestate for state variables you wish to save in local storag
function useLocalStorage<T>(defaultValue: T, key: string) {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = isBrowser ? window.localStorage.getItem(key) : null
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return { value, setValue }
}

export default useLocalStorage
