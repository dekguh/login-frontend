import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IFormLogin } from '../../../utils/types'
import Button from '../../atoms/controls/Button'
import TextField from '../../atoms/controls/TextField'
import TextError from '../../atoms/text/TextError'
import TextHeading from '../../atoms/text/TextHeading'
import TextLabel from '../../atoms/text/TextLabel'
import TextLink from '../../atoms/text/TextLink'
import WrapperForm from '../../atoms/wrapper/WrapperForm'

const FormLogin : React.FC = () => {
    const { handleSubmit, register, formState: { errors }} = useForm()
    const navigate = useNavigate()

    const formHandle : SubmitHandler<IFormLogin> = (data : {[key: string] : any}) => {
        if(!errors.length) {
            console.log(data)
            localStorage.setItem('jwt_login', 'tes')
            navigate('/')
        }
    }

    return (
        <WrapperForm classes='py-10 px-6 rounded-lg w-full' dataTestId='form-login'>
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

            <form onSubmit={handleSubmit(formHandle)}>
                <div className='mb-6'>
                    <TextLabel text='email' classes='block mb-1'/>
                    <TextField
                        placeholder='email'
                        type='email'
                        otherProps={{...register('email', {
                            required: true
                        })}}
                    />

                    {errors.email?.type === 'required' && <TextError classes='mt-1' text='email must filled'/>}
                </div>

                <div className='mb-6'>
                    <TextLabel text='password' classes='block mb-1'/>
                    <TextField
                        placeholder='password'
                        type='password'
                        otherProps={{...register('password', {
                            required: true
                        })}}
                    />

                    {errors.password?.type === 'required' && <TextError classes='mt-1' text='password must filled'/>}
                </div>

                <div className='mb-6'>
                    <Button
                        variant='primary'
                        text='sign in'
                        classes='d-block w-full mb-3'
                        type='submit'
                    />

                    <Button
                        variant='secondary'
                        text='sign in with google'
                        classes='d-block w-full'
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