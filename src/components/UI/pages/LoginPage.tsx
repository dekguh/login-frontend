import React from 'react'
import withAuth from '../../utils/HOC/withAuth'
import LoginTemplate from '../templates/LoginTemplate'

const LoginPage = () => {
  return (
    <LoginTemplate />
  )
}

export default withAuth(LoginPage)