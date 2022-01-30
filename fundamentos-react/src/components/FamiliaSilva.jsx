import React from "react";
import Member from "./Member";

export default props=>
<div>
    <Member nome='Lucas' sobrenome={props.sobrenome}/>
    <Member nome='Ana' sobrenome={props.sobrenome}/>
    <Member nome='Maria' sobrenome={props.sobrenome}/>
    <Member nome='João' sobrenome={props.sobrenome}/>
</div>
