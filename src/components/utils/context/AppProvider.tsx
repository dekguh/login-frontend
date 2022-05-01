import React, { useReducer } from 'react'
import { IAppInitialState, IAppProvider } from '../types'
import AppReducer, { UPDATE_IS_LOGIN } from './AppReducer'

export const initialState : IAppInitialState = {
    isLogin: false
}

export const AppContext = React.createContext<IAppInitialState>(initialState)

const AppProvider : React.FC<IAppProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const actUpdateIsLogin = (status : boolean) => {
        dispatch({
            type: UPDATE_IS_LOGIN,
            payload: status
        })
    }

    return (
        <AppContext.Provider value={{
            ...state,
            actUpdateIsLogin,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider