import React from 'react';

const InputGroup = (props) => {

    const IconLeft = (props.IconLeft ? 'icon-left' : '')
    const IconRight = (props.IconLeft ? 'icon-right' : '')

    return (
        <div className={`input-group ${props.size ? `input-group--${props.size}` : ''} ${IconLeft} ${IconRight} ${props.styles}`}>
            {props.children}
        </div>  
    );
}

const Prepend = (props) => {

    return (
        <div className={`input-group-prepend ${props.styles}`} onClick={props.click} tabIndex="-1">
            {props.children}
        </div>
    )
}

const Append = (props) => {
    
    return (
        <div className={`input-group-append ${props.styles}`} onClick={props.click} tabIndex="-1">
            {props.children}
        </div>
    )
}

InputGroup.Prepend = Prepend;
InputGroup.Append = Append;


export default InputGroup;