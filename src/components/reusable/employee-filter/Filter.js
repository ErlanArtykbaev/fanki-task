import React from 'react'

const Filter = (props) => {
  return(
    <div className='filter' onClick={() => {props.change(props.type)}}>
      <div className='type'>
        <div className={props.line}></div>
        <div>{props.type}</div>
      </div>
      <div className='count'>{props.count}</div>
    </div>
  )
}

export default Filter