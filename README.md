glamor-inline 
---

what if instead of this - 
```jsx 
<html>
  <head>
    <style>
      .css-1ezp9xe,[data-css-1ezp9xe]{color:red;}
      .css-1bf41l6,[data-css-1bf41l6]{border:1px solid green;}
      .css-icjsl7,[data-css-icjsl7]{color:blue;}
    </style>
  </head>
  <body>
    <div class="css-1ezp9xe" data-css-1bf41l6="">
      <span>Some text here</span>
      <span class="css-icjsl7 something" data-css-1ezp9xe=""> 
        more text 
      </span>
    </div>
  </body>
</html>
```

we could do this -
```jsx
<html>
  <head/>
  <body>
    <style>
      .css-1ezp9xe,[data-css-1ezp9xe]{color:red;}
      .css-1bf41l6,[data-css-1bf41l6]{border:1px solid green;}
    </style>
    <div class="css-1ezp9xe" data-css-1bf41l6="">
      <span>Some text here</span>
      <style>.css-icjsl7,[data-css-icjsl7]{color:blue;}</style>
      <span class="css-icjsl7 something" data-css-1ezp9xe=""> more text </span>    
    </div>
  </body>
</html>
```


pros 
--- 

- progressively load just the precise css you need, precisely when you need it


cons
---

- hyper optimization 
- unclear runtime characteristics
- breaks react checksums 



todo
---
- stream it 
- try not to break checksums 