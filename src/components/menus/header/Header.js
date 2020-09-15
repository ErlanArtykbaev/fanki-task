import React from 'react'
import { NavLink } from 'react-router-dom'

import Notifications from './Notifications'
import User from './User'

import logo from '../../../assets/img/logo.png'

const Header = () => {
  return(
    <header>
      <div className='contents'>
        <NavLink to='/' className='logo-link'>
          <img src={logo} alt='logo' />
        </NavLink>
        <div className='right'>
          <Notifications />
          <User />
        </div>
      </div>
    </header>
  )
}

export default Header