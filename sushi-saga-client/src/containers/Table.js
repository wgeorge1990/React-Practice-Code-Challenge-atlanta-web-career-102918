import React, { Fragment } from 'react'

class Table extends React.Component {
  state = {
    wallet: 200
  }

renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }


  sushiBill = () =>{
    debugger
    const bill = 0
    if(!this.props.eatenSushis){
      this.props.eatenSushis.map(sushi => sushi.price + bill)
    } else {
      null
    }
  }

  render(){
    return(<Fragment>
      <h1 className="remaining">
        You have: ${this.state.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            this.renderPlates(this.props.eatenSushis)
          }
        </div>
      </div>
    </Fragment>)
  }
}

export default Table
