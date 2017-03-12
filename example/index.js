
import { css } from 'glamor'
import React from 'react'

css.global(`body`, { padding: 40 })



export default  () => 
  <div className={css({ color: 'red' })} 
    {...css({ border: '1px solid green'}) }>
      <span>Some text here</span> 
      <span className={`${css({ color: 'blue'})} something`} 
        {...css({ color: 'red' })}> 
          more text 
      </span>
  </div>



