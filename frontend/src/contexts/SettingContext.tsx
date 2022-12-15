import Cookies from 'js-cookie'
import React from 'react'

interface State {
  showSidebar: boolean
}
type Action = { type: 'toggleSidebar' } | { type: 'login' }


const initialState: State = {
  showSidebar: true,
}

function settingReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggleSidebar':
      console.log(state)
      return {
        ...state,
        showSidebar: !state.showSidebar,
      }
    default:
      throw new Error('Unknown Auth Action!')
  }
}

const SettingStateContext = React.createContext<State>(initialState)
SettingStateContext.displayName = 'SettingStateContext'
const SettingActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined)
SettingActionContext.displayName = 'SettingActionContext'

export const SettingProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(settingReducer, initialState)
  return (
    <SettingStateContext.Provider value={state}>
      <SettingActionContext.Provider value={dispatch}>
        {children}
      </SettingActionContext.Provider>
    </SettingStateContext.Provider>
  )
}

export function useSettingState() {
  const context = React.useContext(SettingStateContext)
  if (context === undefined) {
    throw new Error(`useSettingState must be used within a SettingProvider`)
  }
  return context
}

export function useSettingAction() {
  const dispatch = React.useContext(SettingActionContext)
  if (dispatch === undefined) {
    throw new Error(`useSettingAction must be used within a SettingProvider`)
  }
  return {
    toggleSidebar() {
      dispatch({ type: 'toggleSidebar' })
    }
  }
}
