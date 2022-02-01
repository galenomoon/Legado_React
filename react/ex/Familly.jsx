import React from "react";

export default props => (
    <div>
        <h1>Familly</h1>
        {/* {React.cloneElement(props.children, { ...props })} */}
        {React.Children.map(props.children,
            child => React.cloneElement(child, { ...props }))}
    </div>
)