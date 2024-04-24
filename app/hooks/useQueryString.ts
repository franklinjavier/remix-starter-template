import { useSearchParams } from '@remix-run/react'
import * as React from 'react'

type NavigateOptions = {
  replace?: boolean | undefined
  state?: any
}

type QueryStringProps = [
  string,
  (newValue: string, options?: NavigateOptions) => void,
  (newValue: string) => string,
]

/**
 * @param {string} key The query string key
 * @returns {string} The value of passed query string
 * @returns {function} Function to change query string programatically
 * @returns {string} The query string (same as location.search), eg: `?search=foo`
 */
export function useQueryString(
  key: string,
  defaultValue?: string,
): QueryStringProps {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramValue = searchParams.get(key)

  const value = React.useMemo(
    () => paramValue ?? defaultValue ?? '',
    [paramValue, defaultValue],
  )

  const setValue = React.useCallback(
    (newValue: string, options?: NavigateOptions) => {
      const newSearchParams = new URLSearchParams(searchParams)
      if (newValue) {
        newSearchParams.set(key, newValue)
      } else {
        newSearchParams.delete(key)
      }
      setSearchParams(newSearchParams, options)
    },
    [key, searchParams, setSearchParams],
  )

  const makeSearchParams = React.useCallback(
    (newValue: string) => {
      const newSearchParams = new URLSearchParams(searchParams)
      if (newValue) newSearchParams.set(key, newValue)
      else newSearchParams.delete(key)
      return `?${newSearchParams.toString()}`
    },
    [key, searchParams],
  )

  return [value, setValue, makeSearchParams]
}
