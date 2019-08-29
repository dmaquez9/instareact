import React from 'react'

function useCallbackStatus() {
  const [{error}, setState] = React.useReducer(
    (s, a) => ({...s, ...a}),
    {error: null},
  )

  function run(promise) {
    if (!promise || !promise.then) {
      throw new Error(
        `The argument passed to useCallbackStatus().run must be a promise. Maybe a function that's passed isn't returning anything?`,
      )
    }
    return promise.then(
      value => value,
      error => {
        setState({error: error.response.data})
        return Promise.reject(error)
      },
    )
  }

  return {
    error,
    run,
  }
}

export default useCallbackStatus