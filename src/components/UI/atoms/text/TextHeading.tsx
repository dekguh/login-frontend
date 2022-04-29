import React from 'react'
import { ITextHeading } from '../../../utils/types'

const TextHeading : React.FC<ITextHeading> = ({
    component: Component = 'h1',
    text,
    classes
}) => {
  return (
    <Component
        className={`text-black font-semibold leading-tight ${classes}`}
    >
        {text}
    </Component>
  )
}

export default TextHeading