import { useEffect, useReducer } from "react"

function init( {initialState, storageKey}) {
  const stringState = localStorage.getItem(storageKey)
  if (stringState) {
    try {
      return JSON.parse(stringState)
    } catch (error) {
      return initialState
    }
  } else {
    return initialState
  }
}

export function usePersistedReducer(
  reducer,
  initialState,
  storageKey,
) {
  const [state, dispatch] = useReducer(reducer, {initialState, storageKey}, init)

  useEffect(() => {
    const stringifiedState = JSON.stringify(state)
    localStorage.setItem(storageKey, stringifiedState)
  }, [state, storageKey])

  return { state, dispatch }
}
