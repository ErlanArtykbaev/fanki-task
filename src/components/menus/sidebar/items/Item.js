import React from 'react'

const Item = (props) => {
  return(
    <div className='item'>
      {props.icon}
      {props.title}
    </div>
  )
}

export default Item