import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import _ from 'lodash';

class SushiContainer extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    moreButtonIncrement: 0,
    otherMoreButtonIndex: 4,
    chunk: []
  }

  renderSushi= () => {
    console.log(this.state.chunk)

      this.setState({
      moreButtonIncrement: this.state.moreButtonIncrement + 4
    })
      this.setState({
        otherMoreButtonIndex: this.state.otherMoreButtonIndex + 4
      })
      this.updateChunk()

  }

  updateChunk=()=> {
    this.setState({
      chunk: _.slice(this.props.sushis, this.state.moreButtonIncrement, this.state.otherMoreButtonIndex)
    });
  }



  render(){
    const chunk = _.slice(this.props.sushis, this.state.moreButtonIncrement, this.state.otherMoreButtonIndex)
    return(
      <Fragment>
        <div className="belt">


            {
               chunk.map((sushi) =>
              <Sushi
              wallet={this.props.wallet}
              remainingMoney={this.props.remainingMoney}
              sushi={sushi}
              key={sushi.id}
              eaten={this.props.eaten}
              eatSushi={this.props.eatSushi} />) }


          <MoreButton onClick={this.renderSushi}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
