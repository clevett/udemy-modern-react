import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = index => setActiveIndex(index)

  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''
    
    return (
      <div key={item.title}>
        <div 
          className={`title ${active}`}
          onClick={() => handleClick(index)}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    )
  })

  return (
    <div className='ui styled accordion'>
      {renderItems}
    </div>
  )
}

export default Accordion