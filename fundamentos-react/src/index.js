import React from 'react' //Sintaxe JSX React
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import { CompA, CompB } from './components/DoisComponente'

//single page application | get div #root of index.html
const element = document.getElementById('root')
ReactDOM.render(
    <div>
        {/* <PrimeiroComponente value={'Good Morning'}/> */}
        <CompA value={'Olá'}/>
        <CompB value={'Tudo bem?'}/>
    </div>
    , element)