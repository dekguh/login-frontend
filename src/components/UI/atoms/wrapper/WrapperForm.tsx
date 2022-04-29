import React from 'react'
import { IWrapperForm } from '../../../utils/types'

const WrapperForm : React.FC<IWrapperForm> = ({ classes, children }) => {
  return (
    <div className={`bg-white shadow-form ${classes}`}>
        {children}
    </div>
  )
}

export default WrapperForm