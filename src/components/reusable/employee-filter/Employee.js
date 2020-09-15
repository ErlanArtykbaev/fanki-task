import React from 'react'

const Employee = (props) => {
  return(
    <div className='employee'>
      <div className='info'>
        <img src={props.img} alt='img' className='img' />
        <div className='name-position'>
          <div className='name'>{props.name}</div>
          <div className='position'>{props.position}</div>
        </div>
      </div>
      <div className={'date ' + props.state}>
        {props.date}
      </div>
    </div>
  )
}

export default Employee