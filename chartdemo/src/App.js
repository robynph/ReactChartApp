import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart';

const API_URL = "http://localhost:4000/results";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
            throw new Error ('something went wrong')
        }
      })
      .then(results => this.setState({
        results: results.filter((r)=>{
            return r.name === 'Python';
          })
        })
      )}

  render() {
    const {results} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart data={results}/>
      </div>
    );
  }
}

export default App;
