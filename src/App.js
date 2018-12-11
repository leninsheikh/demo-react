import React, { Component } from 'react';
import './App.css';
import User from './Form/User';

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
  render() {
    return (
      <div className="App">
        <h2>Hi {this.state.form.firstName + ' ' + this.state.form.lastName }</h2>
        <User change={this.formChnageHandler} form={this.state.form}></User>
      </div>
    );
  }
}

export default App;
