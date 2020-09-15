import React, { useState, useEffect } from 'react'

import TabContent from '../components/reusable/tab/TabContent'

const Tabs = (props) => {
  const [active, setActive] = useState(props.children[0].props.label)
  const [content, setContent] = useState('')

  useEffect(() => {
    let a = ''
    for(let i = 0; i < props.children.length; i++){
      if(active === props.children[i].props.label){
        a = props.children[i].props.children
      }
    }
    setContent(a)
  }, [active])

  const clickHandler = (tab) => {
    setActive(tab)
  }

  return(
    <div className='tabs'>
      <div className="tab-list">
        {props.children.map(child => {
          let { label } = child.props;
          return (
            <TabContent
              key={label}
              label={label}
              active={active}
              onClickTab={clickHandler}
            />
          );
        })}
      </div>
      <div className='tab-content'>
        {
          content
        }
      </div>
    </div>
  )
}

export default Tabs
