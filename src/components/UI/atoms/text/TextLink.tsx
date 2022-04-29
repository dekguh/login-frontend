import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ITextLink } from '../../../utils/types'

const TextLink : React.FC<ITextLink> = ({
    text,
    classes,
    to = '#'
}) => {
    const navigate = useNavigate()

    return (
        <a
            href={'#'}
            onClick={() => navigate(to)}
            className={`
                text-sm leading-tight text-green-primary underline 
                ${classes}
            `}
        >
            {text}
        </a>
    )
}

export default TextLink