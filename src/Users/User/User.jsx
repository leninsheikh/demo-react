import React from 'react';

const User = props => {
    const style = {
        textAlign: 'center',
    }
    return (

        <div style={style} className='row'>
            <div className='col s6'>
                Name: {props.user.username}
            </div>
            <div className='col s6'>
                Email: {props.user.email}
            </div>
        </div>

    )
}

export default User;
