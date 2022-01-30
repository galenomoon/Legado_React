import React from 'react' //Sintaxe JSX React
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'

//single page application | get div #root of index.html
const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente/>
    </div>
    , element)