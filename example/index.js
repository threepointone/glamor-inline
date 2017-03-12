
import { css, styleSheet } from 'glamor'
import inline from '../src'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { renderStatic } from 'glamor-server'
const App = () => <div className={css({ color: 'red' })} {...css({ border: '1px solid green'}) }>
  <span>Some text here</span> 
  <span className={`${css({ color: 'blue'})} something`} {...css({ color: 'red' })}> more text </span>
</div>



let inlined = inline(renderToStaticMarkup(<App/>))

console.log(inlined)