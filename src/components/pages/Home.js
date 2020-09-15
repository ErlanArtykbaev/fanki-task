import React from 'react'
import Block from '../reusable/blocks/Block'
import Tabs from '../../containers/Tabs'
import FilterStaff from '../../containers/FilterStaff'

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
          hehehehhah
        </Block>
        <Block 
          title='Календарь'
          count='1'
          more='Календарь'
          class='small-block'>
          heheh
        </Block>
        <Block 
          title='База знаний'
          count='1'
          more='База знаний'
          class='small-block'>
          heheh
        </Block>

      </div>
    </div>
  )
}

export default Home