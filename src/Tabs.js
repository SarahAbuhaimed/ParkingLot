import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default class Tabs extends Component {
    handleClick=()=>{
        this.props.removeAll()
    }
render() {
    return (
      <div className="space">
       <ButtonGroup aria-label="Basic example">
  <Button variant="secondary" onClick={this.handleClick}>Alfaisal University</Button>
  <Button variant="secondary" onClick={this.handleClick}>Saudi Electronic University</Button>
</ButtonGroup>
      </div>
    )
  }
}