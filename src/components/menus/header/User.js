import React from 'react'

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import lion from '../../../assets/img/lion.svg'

const User = () => {
  return(
    <div className='user'>
      <div className='name-position'>
        <div className='name'>
          Александров Александр
        </div>
        <div className='position'>
          Frontend Разработчик
        </div>
      </div>
      <div className='avatar'>
        <img src={lion} className='lion' alt='lion' />
      </div>
      <ExpandMoreRoundedIcon className='more' />
    </div>
  )
}

export default User