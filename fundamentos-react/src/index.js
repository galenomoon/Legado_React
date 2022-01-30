import React from 'react' //Sintaxe JSX React
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import A, { CompB as B } from './components/DoisComponente'
import MultiElements from './components/MultiElements'
import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia'
import Member from './components/Member'


//single page application | get div #root of index.html
const element = document.getElementById('root')
ReactDOM.render(
    <div>
        {/* <MultiElements/> */}
        {/* <PrimeiroComponente value={'Good Morning'}/> */}
        {/* <A value={'Olá, eu sou A'} />
        <B value={'Tudo bem, sou B?'} /> */}
<Familia>
    <Member nome="Guilherme" sobrenome="Galeno"/>
    <Member nome="Luana" sobrenome="Galeno"/>
</Familia>
        <FamiliaSilva/>
    </div>
    , element)