import React from 'react'
import { IButton } from '../../../utils/types'

const Button : React.FC<IButton> = ({
    variant = 'primary',
    onClick,
    classes,
    text
}) => {
  return (
    <button
        className={`
            py-3 px-6 text-white rounded text-sm leading-tight font-medium 
            ${variant === 'primary' && 'bg-green-primary'} 
            ${classes}
        `}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button