import React, { Component } from 'react'
// const user='ibrohim'
 class button extends Component {
    constructor(props) {
        super(props);
        this.state = {
          number: 0,
        };
      
    }
  render() {
    return (
        <button onClick={()=>this.setState({number: this.state.number+1})}>Click {this.state.number}</button>
        
    )
  }
}
export default button;