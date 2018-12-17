import React from 'react';
const renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div className="row">
            <div className="input-field col s10 offset-s1">
                <input  {...input}
                  placeholder={label}
                  className="validate" />
                <label className="active">{label}</label>
                {touched && error && <span style={{color : 'red'}} className="helper-text" data-error={error}>{error} </span>}
            </div>
    </div>
);

export default renderField;
