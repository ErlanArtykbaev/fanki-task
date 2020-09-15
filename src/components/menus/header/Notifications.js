import React from 'react'

import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded'

const Notifications = () => {
  return(
    <div className='box-notifications'>
      <div className='notifications'>
        <NotificationsNoneRoundedIcon className='bell' />
        <p>
          Сообщений нет
        </p>
      </div>
    </div>
  )
}

export default Notifications