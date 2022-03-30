// console.log(3344)
// document.addEventListener('click', () => { 
//   import(/* webpackPrefetch:true */'./click.js').then(({ default: func}) => { 
//     func()
//   })
// })

// import './style.css'

// console.log(1234)

// import $ from 'jquery'
// import _ from 'lodash'
// import { ui } from './jquery.ui.js'
// import { resolve } from '../node_modules/.staging/upath-bd36cba2/upath.d';
// ui()
// const dom = $('<div>');
// dom.html(_.join(['Dell', 'Lee'], ' '))
// $('body').append(dom)

// console.log('Hello World!')


console.log('a')

setTimeout(() => { 
  console.log('b')
})

// const p = new Promise((resolve,reject) => { 
//   console.log('c')
//   resolve('')
// })

// p.then(() => {
//   console.log('d')
// })
// console.log('e')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => { 
    navigator.serviceWorker.register('/service-worker.js').then(registration => { 
      console.log('service-worker registed')
    }).catch(error => { 
      console.log('service-worker register error')
    })
  })
 }