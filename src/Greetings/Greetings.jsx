import React from 'react';
import { connect } from 'react-redux';

const greetings = (props) => {
    return (
        <div>
            <h1>{props.appName}</h1>
            <h2>Hi {props.form.firstName + ' ' + props.form.lastName}</h2>
            <h4>CLick: {props.counter}</h4>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter : state.testReducer.counter,
        appName: state.testReducer.appName
    };
}



export default connect(mapStateToProps)(greetings);