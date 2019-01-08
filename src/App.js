import React, { Component } from 'react';
import * as moment from 'moment';

import './App.scss';
import List from './components/List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      date: moment().format('LLLL'),
      noInputMsg: ''
    };
  }

  onChange = event => {
    this.setState({ 
      term: event.target.value 
    });
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.state.term) {
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    } else {
      event.preventDefault();
      this.setState({
        noInputMsg: 'Task cannot be empty!'
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>To do list</h1>
          <h2>Today is {this.state.date}</h2>
        </div>

        <form className="form" onSubmit={this.onSubmit}>
          <p className={this.state.term ? "invisible" : "visible"}>{this.state.noInputMsg}</p>
          <input 
            type="text" 
            value={this.state.term} 
            onChange={this.onChange}
            placeholder="I need to..." />
          <button 
            type="submit" 
            className="btn btn-secondary">
              Submit
          </button>    
        </form>
        <List items={this.state.items}></List>
      </div>
    );
  }
}

export default App;
