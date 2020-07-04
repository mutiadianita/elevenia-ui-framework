import React from 'react';

const FormGroup = (props) => {
    return (
        <div className={`form-group ${props.types ? `form-group--${props.types}`: ''} ${props.validation ? `form-group--${props.validation}` : ''} ${props.inline ? 'form-group--inline' : '' } ${props.styles ? props.styles : ''}`} >
            {props.children}
            {props.helptext
                ? <p className={`form-group__helptext ${props.helpStyles ? `${props.helpStyles}` : ''}`}>{props.helptext}</p>
                : null
            }
        </div>
    );
};

const FormGroupLabel = (props) => {
    return (
        <p className={`form-group__label`}>
            {props.children !== undefined ? props.children : <div className={'u-mt-24'}></div>}
        </p>
    )
}

FormGroup.Label = FormGroupLabel;

export default FormGroup;