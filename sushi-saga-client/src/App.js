import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
      sushis: [],
      eatenSushis: [],
      wallet: 200
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

eatSushi = (e, sushi) => {
console.log(sushi)

  if (this.state.wallet >0) {this.setState({
    eatenSushis: this.state.eatenSushis.concat(sushi)
  })}
  else{
    null
  }
}

remainingMoney = (e, sushi) => {
  console.log("inside sushi bill", sushi, this.state.wallet, sushi.price)


  if(this.state.wallet > 0) {
    this.setState({
    wallet: this.state.wallet - sushi.price
  })
} else {
  null
}


}

  render() {
    return (
      <div className="app">
        <SushiContainer
          wallet={this.state.wallet}
          remainingMoney={this.remainingMoney}
          eatSushi={this.eatSushi}
          sushis={this.state.sushis}
          eaten={this.state.eaten}
          />
        <Table eatenSushis={this.state.eatenSushis} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
