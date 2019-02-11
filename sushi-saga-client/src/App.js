import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
      sushis: [],
      eatenSushis: []
  }


  fetchSushi = () => {
  fetch(API).then(res => res.json())
  .then(data => {this.setState({
    sushis: data
  })})
}

componentDidMount() {
  this.fetchSushi()
}

eatSushi = (e) => {

console.log(this)
  this.setState({
    eatenSushis: this.state.eatenSushis.concat(this.sushi)
  })
}


  render() {
    return (
      <div className="app">
        <SushiContainer
          eatSushi={this.eatSushi}
          sushis={this.state.sushis}
          eaten={this.state.eaten}
          />
        <Table eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;
