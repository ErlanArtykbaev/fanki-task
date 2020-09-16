import React from 'react'

import avatar from '../../../assets/img/avatar.svg'
import message from '../../../assets/img/sidebar/message-circle.svg'
import emote from '../../../assets/img/Emote.png'
import smile from '../../../assets/img/Smile.svg'
import news from '../../../assets/img/news-img.png'

const NewsSample = (props) => {
  if(props.class !== 'big'){
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
  }else{
    return(
      <div className={props.class}>
        <img src={news} alt='news-imt' className='news-img' />
        <div className='information'>
          <div className='time'>{props.time}</div>
          <div className='news-title'>
            {props.title}
          </div>
          <div className='news-text'>
            {props.text}
          </div>
          <div className='more'>
            <div className='likes'>
              <div className='first-like'>
                <img src={emote} alt='like' className='news-like' />
                <span>3</span>
              </div>
              <div className='second-like'>
                <img src={emote} alt='like' className='news-like' />
                <span>5</span>
              </div>
              <div className='emoji'>
                <img src={smile} alt='emoji' className='news-emoji' />
              </div>
            </div>
            <div className='comments'>
              <img src={message} alt='commetn' className='comment-img' />
              <span>18 комертариев</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsSample