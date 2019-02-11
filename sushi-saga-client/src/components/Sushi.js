import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  eatSushi = (e) => {
    this.setState({
      eaten: !this.state.eaten
    })

    this.props.eatSushi(e, this.props.id)

  }

  render(){
    return (
      <div className="sushi">
        <div className="plate"
             onClick={(e) => this.eatSushi(e)} >
          {
            (this.state.eaten === false) ?
              <img src={this.props.sushi.img_url} alt={this.props.sushi.name} width="100%" />
            :
              null
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}



export default Sushi
