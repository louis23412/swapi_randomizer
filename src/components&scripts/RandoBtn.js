import React, { Component } from 'react';
import GetData from './GetData';
import '../styling/btn.css'

class RandoBtn extends Component {
    handleClick = async () => {
        this.props.handler('Loading....')
        const data = await GetData(this.props.name)
        this.props.handler(data)
    }
  
    render() {
      return (
        <button onClick = {this.handleClick}>
          {this.props.name}
        </button>
      );
    }
}

export default RandoBtn;