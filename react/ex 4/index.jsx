import React from "react";
import ReactDOM from "react-dom";
import Familly from './Familly'
import Member from './member'


ReactDOM.render(
    <div>
        <Familly lastname="Silva">
            <Member name='Galeno' />
            <Member name='Rafael' />
            <Member name='Julia' />
        </Familly>
    </div>
    , document.getElementById('app'))
