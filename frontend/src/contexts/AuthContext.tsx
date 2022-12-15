import Cookies from 'js-cookie'
import React from 'react'

interface State {
  isAuthorized: boolean
}
type Action = { type: 'logout' } | { type: 'login' }

export function checkIsLoggedIn() {
  const token = Cookies.get('AUTH_TOKEN')
  if (!token) return false
  return true
}

const initialState: State = {
  isAuthorized: checkIsLoggedIn(),
}

function authReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isAuthorized: true,
      }
    case 'logout':
      console.log('dm logout')
      return {
        ...state,
        isAuthorized: false,
      }
    default:
      throw new Error('Unknown Auth Action!')
  }
}

const AuthStateContext = React.createContext<State>(initialState)
AuthStateContext.displayName = 'AuthStateContext'
const AuthActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined)
AuthActionContext.displayName = 'AuthActionContext'

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState)
  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionContext.Provider value={dispatch}>
        {children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  )
}

export function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error(`useAuthState must be used within a AuthProvider`)
  }
  return context
}

export function useAuthAction() {
  const dispatch = React.useContext(AuthActionContext)
  if (dispatch === undefined) {
    throw new Error(`useAuthAction must be used within a AuthProvider`)
  }
  return {
    loginSuccess() {
      dispatch({ type: 'login' })
    },
    logoutSuccess() {
      dispatch({ type: 'logout' })
    },
  }
}
