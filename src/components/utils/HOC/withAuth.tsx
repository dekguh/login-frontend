import React, { ComponentType, useContext, useEffect } from 'react'
import { AppContext } from '../context/AppProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const withAuth = <T,>(Component : ComponentType<T>) => {
    return (props : T) : JSX.Element | null => {
        const { isLogin, actUpdateIsLogin } = useContext(AppContext)
        const navigate = useNavigate()
        const location = useLocation()

        useEffect(() => {
            if(localStorage.getItem('jwt_login')) actUpdateIsLogin && actUpdateIsLogin(true)
            if(location.pathname !== '/login' && !localStorage.getItem('jwt_login')) {
                actUpdateIsLogin && actUpdateIsLogin(false)
                navigate('/login')
            }
            if(location.pathname === '/login' && localStorage.getItem('jwt_login')) {
                navigate('/')
            }
        }, [])

        if(localStorage.getItem('jwt_login')) return(<Component {...props}/>)
        if(location.pathname === '/login' && !localStorage.getItem('jwt_login')) return(<Component {...props}/>)
        return null
    }
}

export default withAuth