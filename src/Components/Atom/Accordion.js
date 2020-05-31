import React, { useState, useRef } from 'react';

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
      <button onClick={handleClick} className="accordion">
        <div className={`accordion__label ${show ? 'u-fw-bold' : ''}`}>{label}</div>
        <div className={`accordion__arrow accordion__arrow--${show ? 'bottom' : 'right'} ${show ? 'accordion__arrow--show' : ''}`} />
      </button>
      <div ref={AccordionContent} className="accordion-content">
        {children}
      </div>
    </>
  )
}

export default Accordion;