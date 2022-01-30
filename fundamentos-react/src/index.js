import React from 'react' //Sintaxe JSX React
import ReactDOM from 'react-dom'
import PrimeiroComponente from './components/PrimeiroComponente'
import A, { CompB as B } from './components/DoisComponente'
import MultiElements from './components/MultiElements'
import FamiliaSilva from './components/FamiliaSilva'
import Familia from './components/Familia'
import Member from './components/Member'
import ComponentWithFunction from './components/componentWithFunction'


//single page application | get div #root of index.html
const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <ComponentWithFunction/>
        {/* <MultiElements/> */}
        {/* <PrimeiroComponente value={'Good Morning'}/> */}
        {/* <A value={'Olá, eu sou A'} />
        <B value={'Tudo bem, sou B?'} /> */}
{/* <FamiliaSilva sobrenome=" Silva">
    <Member nome="Guilherme" />
    <Member nome="Luana" sobrenome="Galeno"/>
</FamiliaSilva> */}
{/* <Familia sobrenome=" Pereira ">
    <Member nome="Ednaldo" />
    <Member nome="Apollo" />
</Familia> */}
        
    </div>
    , element)