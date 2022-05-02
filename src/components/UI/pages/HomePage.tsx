import React from 'react'
import { useNavigate } from 'react-router-dom'
import withAuth from '../../utils/HOC/withAuth'
import Button from '../atoms/controls/Button'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Button
        variant='primary'
        text='logout'
        onClick={() => {
          localStorage.removeItem('jwt_login')
          navigate('/login')
        }}
      />
    </div>
  )
}

export default withAuth(HomePage)