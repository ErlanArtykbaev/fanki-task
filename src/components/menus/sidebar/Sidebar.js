import React from 'react'

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import fanki from '../../../assets/img/fanki-active.svg'
import flash from '../../../assets/img/flash.svg'
import calendar from '../../../assets/img/calendar.svg'
import book from '../../../assets/img/book.svg'
import bookOpen from '../../../assets/img/book-open.svg'
import checkmark from '../../../assets/img/checkmark-circle-2.svg'
import chats from '../../../assets/img/message-circle.svg'

import Item from './items/Item'

const Sidebar = () => {
  return(
    <div className='sidebar'>
      <div className='company-name'>
        <p>
          company name
        </p>
        <ExpandMoreRoundedIcon className='more' />
      </div>
      <div className='items'>
        <Item
          class='item active'
          to='/'
          icon={fanki} 
          title='Главная'
        />
        <Item
          class='item'
          to='/s'
          icon={flash} 
          title='Запросы'
        />
        <Item
          class='item'
          to='/s'
          icon={calendar} 
          title='Календарь'
        />
        <Item
          class='item'
          to='/s'
          icon={book} 
          title='База знаний'
        />
        <Item
          class='item'
          to='/s'
          icon={bookOpen} 
          title='Новости'
        />
        <Item
          class='item'
          to='/s'
          icon={checkmark} 
          title='Задачи'
        />
        <Item
          class='item'
          to='/s'
          icon={chats} 
          title='Чаты'
        />
      </div>
      <div className='company-name'>
        <p>
          Администрация
        </p>
        <ExpandMoreRoundedIcon className='more' />
      </div>
    </div>
  )
}

export default Sidebar