import React from 'react'
import { NavLink } from 'react-router-dom'

import questionmark from '../../../../assets/img/sidebar/question-mark-circle.svg'

const Item = (props) => {
  return(
    <NavLink to={props.to} className={props.class}>
      <img src={props.icon} alt='icon' />
      <div className='to-questionmark'>
        <p>
          {props.title}
        </p>
        <img 
          style={{
            display: props.class.includes('active') ? 'block' : 'none'
          }} 
          alt='questionmark'
          src={questionmark} />
      </div>
    </NavLink>
  )
}

export default Item