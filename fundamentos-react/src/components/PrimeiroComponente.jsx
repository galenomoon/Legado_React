import React from 'react'

let isLegal = true
export default (props) =>
<div>
        <h1>{props.value}</h1>
        <h1>{1+1}</h1>
        <h1>{isLegal ? 'Yes' : 'Not'}</h1>
        <h1>{Math.random()}</h1>
    </div>

// export default (props) =>
//     <div>
//         <h1>Primeiro Componente Arrow </h1>)
//     </div>