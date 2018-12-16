import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                        <input
                            value={this.props.form.firstName}
                            id="first_name"
                            type="text"
                            className="validate"
                            onChange={(e) => this.props.change('firstName', e)}
                            />
                        <label>First Name</label>
                        </div>
                        <div className="input-field col s6">
                        <input value={this.props.form.lastName}
                            id="last_name"
                            onChange={(e) => this.props.change('lastName', e)}
                            type="text"
                            className="validate" />
                        <label>Last Name</label>
                        </div>
                    </div>
                    </form>

                <button onClick={this.props.onIncrementCounter} className="btn waves-effect waves-light" type="submit" name="action">Submit
                </button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onIncrementCounter : () => dispatch({type: 'INCREMENT'})
    }
};

const mapStateToProps = state => {
    return {
        counter : state.testReducer.counter
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(User);