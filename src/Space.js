import React, { Component } from 'react'

export default class Space extends Component {

    handler = ()=>{
        this.props.toggle()
    }

  render() {
    return (
      <div className='card col-4' onClick={this.handler}>
        {this.props.taken}
      </div>
    )
  }
}
