import React from 'react'
import { IWrapperForm } from '../../../utils/types'

const WrapperForm : React.FC<IWrapperForm> = ({ classes, children, dataTestId }) => {
  return (
    <div className={`bg-white shadow-form ${classes}`} data-testid={dataTestId}>
        {children}
    </div>
  )
}

export default WrapperForm