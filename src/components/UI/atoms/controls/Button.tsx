import React from 'react'
import { IButton } from '../../../utils/types'

const Button : React.FC<IButton> = ({
    variant = 'primary',
    onClick,
    classes,
    text,
    type = 'button'
}) => {
  return (
    <button
        className={`
            py-3 px-6 rounded text-sm leading-tight font-medium border border-green-primary 
            ${variant === 'primary' && 'text-white bg-green-primary'} 
            ${variant === 'secondary' && 'text-green-primary bg-transparent border border-green-primary'} 
            ${classes}
        `}
        onClick={onClick}
        type={type}
    >
        {text}
    </button>
  )
}

export default Button