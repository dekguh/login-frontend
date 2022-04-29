import React, { useState } from 'react'
import { ITextField } from '../../../utils/types'
import { BsEyeSlashFill, BsEye } from 'react-icons/bs'

const TextField : React.FC<ITextField> = ({
  type,
  onChange,
  placeholder,
  classes
}) => {
  /** for type password */
  const [isShowing, setIsShowing] = useState<boolean>(false)

  return (
    <div className={`relative ${classes}`}>
      <input
        className={`
          w-full py-3 border text-sm text-black-body 
          border-gray-300 rounded focus:border-green-primary 
          focus:shadow-none outline-none leading-tight 
          ${type === 'password' ? 'pl-5 pr-8' : 'px-5'}
        `}
        placeholder={placeholder}
        onChange={onChange}
        type={type === 'password'
          ? isShowing ? 'text' : 'password'
          : type
        }
      />

      {type === 'password' && (
        <i
          className='text-green-primary absolute top-2/4 right-3 transform -translate-y-2/4 cursor-pointer'
          onClick={() => setIsShowing(!isShowing)}
        >
          {isShowing && <BsEyeSlashFill />}
          {!isShowing && <BsEye />}
        </i>
      )}
    </div>
  )
}

export default TextField