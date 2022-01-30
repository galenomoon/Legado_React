import React from 'react' //Sintaxe JSX React
import ReactDOM from 'react-dom'

//single page application | get div #root of index.html
const element = document.getElementById('root')
const jsx = <h1>Olá React</h1>
ReactDOM.render(jsx, element)