import React from 'react'
import { NavLink } from 'react-router-dom'

import questionmark from '../../../../assets/img/question-mark-circle.svg'

const Item = (props) => {
  return(
    <NavLink to={props.to} className={props.class}>
      <img src={props.icon} />
      <div className='to-questionmark'>
        <p>
          {props.title}
        </p>
        <img style={{display: props.class.includes('active') ? 'block' : 'none'}} src={questionmark} />
      </div>
    </NavLink>
  )
}

export default Item