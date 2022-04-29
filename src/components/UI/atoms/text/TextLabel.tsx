import React from 'react'
import { ITextLabel } from '../../../utils/types'

const TextLabel : React.FC<ITextLabel> = ({
    classes,
    text
}) => {
  return (
    <label
        className={`
            text-black-body text-sm leading-tight
            ${classes}
        `}
    >
        {text}
    </label>
  )
}

export default TextLabel