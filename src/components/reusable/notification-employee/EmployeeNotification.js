import React from 'react'

import avatar from '../../../assets/img/avatar.svg'

const EmployeeNotification = (props) => {
  return(
    <div className='employee-notification'>
      <img src={avatar} alt='avatar' className='avatar' />
      <div className='information'>
        <div className='who'>
          <span className='name'>
            {props.name}
          </span> 
          <span className='time'>
            {props.time}
          </span>
        </div>
        <div className='did'>
          {props.did}
        </div>
        <div className='task'>
          {props.task}
        </div>
      </div>
    </div>
  )
}

export default EmployeeNotification