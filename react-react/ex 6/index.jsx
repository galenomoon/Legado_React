import React from "react";
import ReactDOM from "react-dom";
import ClassComponent from './ClassComponent'

ReactDOM.render(
    <ClassComponent label="Counter" initialValue={10} value={10} />
    , document.getElementById('app'))

