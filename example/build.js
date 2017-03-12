import React from 'react'
import webpack from 'webpack'
import fs from 'fs'
import { renderToStaticMarkup } from 'react-dom/server'
import inline from '../src'
import App from './index.js'

let config = {
  entry: './example/client.js',
  output: {
   filename: './example/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          "presets": [ "env", "stage-0", "react" ]          
        }  
      }
    ]    
  }
}

fs.writeFileSync('./example/index.html', `<html>
  <body>
    <div id='root'>${inline(renderToStaticMarkup(<App/>))}</div>
    
  </body>
  </html>`)

let compiler = webpack(config)
compiler.run((x, y, z) => console.log(x, y, z))