import { styleSheet } from 'glamor'

function toTag(ids){
  if(ids.length === 0) {
    return ''
  }
  let idhash = ids.reduce((o, x) => (o[x + ''] = true, o), {})
  let rules = styleSheet.rules().filter(x => {
    let regex = /css\-([a-zA-Z0-9]+)/gm
    let match = regex.exec(x.cssText)
    if(match && idhash[match[1] + '']) {
      return true
    }    
    return false
  })
  return `<style>${rules.map(x => x.cssText).join('')}</style>`
}

export default function(html, rules){
  let regex = /\<|css\-([a-zA-Z0-9]+)/gm
  let match, lastBackIndex = 0, idBuffer = [], result = [], insed = {}
  while((match = regex.exec(html)) !== null){
    debugger;
    if(match[0] === '<'){
      idBuffer = idBuffer.filter(x => !insed[x]);
      (idBuffer.length > 0) && result.push(toTag(idBuffer))
      result.push(html.substring(lastBackIndex, match.index))
      lastBackIndex = match.index 
      idBuffer.forEach(x => insed[x] = true)      
      idBuffer = []
    }
    else {
      idBuffer.push(match[1])
    }
    
  }
  result.push(html.substring(lastBackIndex, html.length))
  return result.join('')

}