import React from 'react'
import FormLogin from '../../molecules/form/FormLogin'

const LoginContainer = () => {
  return (
    <div className='flex flex-row flex-nowrap h-100vh items-center'>
        <div className='hidden md:block flex-grow-0 flex-shrink w-4/12 text-center'>
            <img src='./img/dance.png' className='max-w-441px w-full mx-auto'/>
        </div>

        <div className='flex-grow-0 flex-shrink w-full md:w-4/12 px-5'>
            <FormLogin />
        </div>

        <div className='hidden md:block flex-grow-0 flex-shrink w-4/12 text-center'>
            <img src='./img/chilling.svg' className='max-w-380px w-full mx-auto'/>
        </div>
    </div>
  )
}

export default LoginContainer