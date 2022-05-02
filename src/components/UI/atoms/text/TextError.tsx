import React from 'react'
import { ITextError } from '../../../utils/types'

const TextError : React.FC<ITextError> = ({
    classes,
    text
}) => {
  return (
    <div className={`
        text-sm text-red-400 leading-normal 
        ${classes}
    `}>
        {text}
    </div>
  )
}

export default TextError