import React, { useState, useRef } from 'react';
import { Icon } from './';

const Accordion = ({children, label}) => {
  const [show, setShow] = useState(false);
  const AccordionContent = useRef()

  const handleClick = () => {
    setShow(!show)
    if (AccordionContent.current.style.maxHeight) {
      AccordionContent.current.style.transitionDuration = '200ms'
      AccordionContent.current.style.maxHeight = null
    } else {
      AccordionContent.current.style.transitionDuration = '1000ms'
      AccordionContent.current.style.maxHeight = AccordionContent.current.scrollHeight + 100 + 'vh'
    }
  }

  return (
    <>
      <button onClick={handleClick} className={`accordion accordion-${show ? 'show' : ''}`}>
        <div className="accordion__label">{label}</div>
        <Icon iwidth="i" name={`chevron-${show ? 'down' : 'right'}`} width="16" height="16" fill="#70727D" class={`${show ? 'accordion__arrow--show' : ''}`} />
      </button>
      <div ref={AccordionContent} className="accordion-content">
        {children}
      </div>
    </>
  )
}

export default Accordion;