import React, { Component } from 'react';
import './App.css';
import UserFrom from './Form/User/UserForm';
import Users from './Users/Users';
import { connect } from 'react-redux';
import Header from './Header/Header';

class App extends Component {
  state = {
    food : [
      {name: "burger", quantity: 13},
      {name: "pizza", quantity: 3},
    ],
    form: {
      firstName: 'Mr',
      lastName: 'React',
    }
  }

  formChnageHandler = (fieldName, e) => {
    console.log("called");
    let form = {...this.state.form};
    form[fieldName] = e.target.value
    this.setState({ form: form});
  }

  reduxFormHandler = data => {
    console.log(data);
    let user = {...data}
    user.id = new Date();
    this.props.onAddUser(user);
    console.log(user);
  }
  render() {
    return (
      // <div className="App">
      // <Greetings form={this.state.form}></Greetings>
      //   <User change={this.formChnageHandler} form={this.state.form}></User>
      // </div>
      <div style={{marginTop: '50px'}}>
      <Header></Header>
      <UserFrom onSubmit={this.reduxFormHandler}></UserFrom>
      <Users></Users>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
      users: state.testReducer.users

  };
}
const mapDispatchToProps = (dispatch) => {
  return{
      onAddUser : (newUser) => dispatch({type: 'ADD_USER', user: newUser})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
