import React from 'react'

import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'

const Block = (props) => {
  return(
    <div className={props.class}>
      <div className='title'>
        <p className='title-p'> {props.title} </p>
        <p className='title-notif'> {props.count} </p>
      </div>
      <div className='content'>
        {props.children}
      </div>
      {
        props.class!=='block-headline-title' ? 
        <div className='more'>
          {props.more}
          <ArrowRightAltOutlinedIcon className='arrow' />
        </div> : null
      }
    </div>
  )
}

export default Block