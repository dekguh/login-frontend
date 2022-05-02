import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoginTemplate from '../components/UI/templates/LoginTemplate'

describe('login page testing', () => {
    const Wrapping = () => (
        <BrowserRouter>
            <LoginTemplate />
        </BrowserRouter>
    )

    /** should login page rendered */
    test('should login page rendered', () => {
        render(<Wrapping />)

        expect(screen.getByTestId('login-container')).toBeInTheDocument()
    })

    /** should have a form login */
    test('should login page have a form login', () => {
        render(<Wrapping />)

        expect(screen.getByTestId('form-login')).toBeInTheDocument()
    })

    /** should login page have a image dance */
    test('should login page have a image chilling', () => {
        render(<Wrapping />)

        expect(screen.getByTestId('login-img-chilling')).toBeInTheDocument()
    })
})