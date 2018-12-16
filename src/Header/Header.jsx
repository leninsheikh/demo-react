import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
    const style = {
        textAlign: 'center',
        fontSize: '20pt',
        color: '#a1887f '
    }
    return (
        <div className='row'>
        <div className='col s4 offset-s4'>
            <h2 style={style}>{props.headerText}</h2>
        </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        headerText: state.testReducer.appName
    };
}

export default connect(mapStateToProps)(Header);