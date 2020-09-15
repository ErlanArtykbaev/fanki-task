import React from 'react'

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import fanki from '../../../assets/img/sidebar/fanki-active.svg'
import flash from '../../../assets/img/sidebar/flash.svg'
import calendar from '../../../assets/img/sidebar/calendar.svg'
import book from '../../../assets/img/sidebar/book.svg'
import bookOpen from '../../../assets/img/sidebar/book-open.svg'
import checkmark from '../../../assets/img/sidebar/checkmark-circle-2.svg'
import chats from '../../../assets/img/sidebar/message-circle.svg'
import trending from '../../../assets/img/sidebar/trending-up.svg'
import copy from '../../../assets/img/sidebar/copy.svg'
import people from '../../../assets/img/sidebar/people.svg'
import settings from '../../../assets/img/sidebar/settings.svg'
import layers from '../../../assets/img/sidebar/layers.svg'


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
      <div className='items'>
        <Item
          class='item'
          to='/s'
          icon={trending} 
          title='Статистика компании'
        />
        <Item
          class='item'
          to='/s'
          icon={copy} 
          title='Структура компании'
        />
        <Item
          class='item'
          to='/s'
          icon={people} 
          title='Сотрудники'
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
          icon={settings} 
          title='Настройки'
        />
        <Item
          class='item'
          to='/s'
          icon={layers} 
          title='Служба поддержки'
        />
      </div>
    </div>
  )
}

export default Sidebar