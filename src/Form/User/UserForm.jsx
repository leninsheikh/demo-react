import React from 'react'
import {Field, reduxForm} from 'redux-form'
import renderField from './renderField';
import {required, email, length} from 'redux-form-validators'

const SyncValidationForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    const style = {width: '100%', marginBottom: '20px'};
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username"
                   type="text"
                   component={renderField}
                   label="Username"
                   validate={[
                       required({message: 'username is required'}),
                       length({ min: 2, max: 8 })
                   ]}/>
            <Field name="email"
                   type="email"
                   component={renderField}
                   label="Email"
                   validate={[required(), email()]}/>
            <div className='row'>
                <div className='col s10 offset-s1'>
                    <button style={style}
                            className="waves-effect waves-light btn"
                            type="submit"
                            disabled={submitting}>
                        Save User
                    </button>
                    <button style={style}
                            className="waves-effect waves-light btn"
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}>
                        Clear Values
                    </button>
                </div>

            </div>
        </form>
    )
};

export default reduxForm({
    form: 'syncValidation',  // a unique identifier for this form
    // <--- validation function given to redux-form
})(SyncValidationForm)
