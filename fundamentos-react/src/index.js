import React from 'react' //Sintaxe JSX React
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import A, { CompB as B } from './components/DoisComponente'
import MultiElements from './components/MultiElements'

//single page application | get div #root of index.html
const element = document.getElementById('root')
ReactDOM.render(
    <div>
        {/* <MultiElements/> */}
        {/* <PrimeiroComponente value={'Good Morning'}/> */}
        <A value={'Olá, eu sou A'} />
        <B value={'Tudo bem, sou B?'} />
    </div>
    , element)