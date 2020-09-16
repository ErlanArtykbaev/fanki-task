import React from 'react'

import avatar from '../../../assets/img/avatar.svg'

const NewsSample = (props) => {
  return(
    <div className={props.class}>
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
        <div className='text'>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default NewsSample