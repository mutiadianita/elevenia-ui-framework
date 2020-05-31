import React from 'react';

const Table = ({children, scrollable=false, width, height, className='', ...props}) => {
  return (
    <table
      {...props}
      style={{ width, height, ...props.style }}
      className={`table ${scrollable ? 'table--scrollable' : ''} ${className}`}>
      {children}
    </table>
  )
}

export default Table;