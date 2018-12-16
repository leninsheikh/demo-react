import React from 'react';
import { connect } from 'react-redux';
import User from './User/User';

const Users = props => {
    return (
        <div className='row'>
            <div className='col s10 offset-s1'>
                <ul className="collection with-header">
                    <li  className="collection-header">
                    <h1 style={{textAlign: 'center', fontSize: '19pt'}}>Users</h1>
                    </li>
                    {props.users.map(user => (
                        <li onClick={() => props.onRemoveUser(user.id)}
                            key={user.id}
                            className="collection-item">
                            <User user={user}></User>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}
const mapStateToProps = state => {
    return {
        users: state.testReducer.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveUser: (userId) => dispatch({ type: 'REMOVE_USER', userId: userId })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
