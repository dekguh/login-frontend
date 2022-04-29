import React from 'react'
import { IFormLogin } from '../../../utils/types'
import Button from '../../atoms/controls/Button'
import TextField from '../../atoms/controls/TextField'
import TextHeading from '../../atoms/text/TextHeading'
import TextLabel from '../../atoms/text/TextLabel'
import TextLink from '../../atoms/text/TextLink'
import WrapperForm from '../../atoms/wrapper/WrapperForm'

const FormLogin : React.FC<IFormLogin> = ({
    onChangeEmail,
    onChangePassword,
    onClickLogin,
    onClickGoogle
}) => {
  return (
    <WrapperForm classes='py-10 px-6 rounded-lg w-full'>
        <TextHeading
            text='Welcome back to Social Fashion'
        />

        <div className='mt-1 mb-8'>
            <p className='text-sm text-black-body'>
                new here?
                <TextLink
                    text='Create an account'
                    to='/signup'
                    classes='ml-1'
                />
            </p>
        </div>

        <form>
            <div className='mb-6'>
                <TextLabel text='email' classes='block mb-1'/>
                <TextField
                    placeholder='email'
                    type='email'
                    onChange={onChangeEmail}
                />
            </div>

            <div className='mb-6'>
                <TextLabel text='password' classes='block mb-1'/>
                <TextField
                    placeholder='password'
                    type='password'
                    onChange={onChangePassword}
                />
            </div>

            <div className='mb-6'>
                <Button
                    variant='primary'
                    text='sign in'
                    classes='d-block w-full mb-3'
                    onClick={onClickLogin}
                />

                <Button
                    variant='secondary'
                    text='sign in with google'
                    classes='d-block w-full'
                    onClick={onClickGoogle}
                />
            </div>

            <div className='text-center'>
                <TextLink
                    text='reset password'
                    to='/reset-password'
                />
            </div>
        </form>
    </WrapperForm>
  )
}

export default FormLogin