import React from 'react'
import Block from '../reusable/blocks/Block'
import Tabs from '../../containers/Tabs'
import FilterStaff from '../../containers/FilterStaff'

import right from '../../assets/img/chevron-right.svg'
import left from '../../assets/img/chevron-left.svg'
import book from '../../assets/img/image-8.svg'

const Home = () => {
  return(
    <div className='home'>
      <Block 
        title='Headline title'
        count='Notification_count'
        class='block-headline-title'>
        <Tabs >
          <div label='Сегодня, 20 авг'>
            <FilterStaff />
          </div>
          <div label='Завтра, 21 авг'>bababab</div>
          <div label='Неделя'>cacaca</div>
        </Tabs>
      </Block>
      <div className='three-blocks'>
        <Block 
          title='Запросы'
          count='1'
          more='Запросы'
          class='small-block'>
          <div className='slider'>
            <img src={left} alt='left' className='img' />
            <p>
              У вас 
              <span>
                2 несоглосованных запроса
              </span>
              от сотрудников: 
              <b>
                Петров Алексей и Шишкин Егор
              </b>
            </p>
            <img src={right} alt='right' className='img' />
          </div>
          <div className='radios'>
            <div className='radio active'></div>
            <div className='radio'></div>
          </div>
        </Block>
        <Block 
          title='Календарь'
          count='1'
          more='Календарь'
          class='small-block'>
          <div className='slider'>
            <img src={left} alt='left' className='img' />
            <div className='event'>
              <div className='calendar'>
                <div className='month'>
                  АВГ
                </div>
                <div className='day'>
                  20
                </div>
              </div>
              <div className='date-type-event'>
                10:00 - 11:00 | Групповое событие
              </div>
              <div className='event-exact'>
                Презентация мобильной системы
              </div>
            </div>
            <img src={right} alt='right' className='img' />
          </div>
          <div className='radios'>
            <div className='radio active'></div>
            <div className='radio'></div>
          </div>
        </Block>
        <Block 
          title='База знаний'
          count='1'
          more='База знаний'
          class='small-block'>
          <div className='slider'>
            <img src={left} alt='left' className='img' />
            <div className='knowledge'>
              <img src={book} alt='book' className='book' />
              <p>Новых публикаций нет</p>
            </div>
            <img src={right} alt='right' className='img' />
          </div>
          <div className='radios'>
            <div className='radio active'></div>
            <div className='radio'></div>
          </div>
        </Block>

      </div>
      <div className='news-notifications'>
        <Block 
          title='Водопад событий'
          count='1'
          more='Водопад событий'
          class='news'>
            news
        </Block>
        <Block 
          title='Уведомления'
          count='1'
          more='Уведомленя'
          class='notifications-block'>
            notifications
        </Block>

      </div>
    </div>
  )
}

export default Home