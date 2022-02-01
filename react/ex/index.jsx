import React from "react";
import ReactDOM from "react-dom";
import Familly from './Familly'
import Member from './member'

ReactDOM.render(
    <div>
        <Familly>
            <Member name='Galeno' lastname='Sena'/>
        </Familly>
    </div>
    , document.getElementById('app'))
