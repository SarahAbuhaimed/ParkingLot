import React, { Component } from 'react';
import './App.css';
import Parking from './Parking';


class App extends Component {

  state = {
    park: ['P','P','P','P','P','P','P','P','P','P','P','P'],
    isTrue:''
  }

  onClickSearch =()=>{
      var className ="animated flash colorPark"
      this.setState({isTrue:className})  
  }
 

  toggle = (i) => {
    let tempParks = this.state.park

    if(tempParks[i] === 'P'){

      tempParks[i] = <img id="imgc" src="https://requestreduce.org/images250_/car-clipart-overhead-9.png" alt="car" width="200px" height="120px" />
    } 
    this.setState({park: tempParks})
  }
  
  handleClick=()=>{
    let tempParks = this.state.park
for (let i in tempParks){
  tempParks[i] = 'P'
}
this.setState({park: tempParks})

    console.log("clicked")
  //  return this.setState ({
  //     allParking: this.props.allParking   
  //   })
  }
 

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img className="App-logo" src="http://www.cashadvance6online.com/data/archive/img/513887479.png" alt="logo" width="340" height="90"/>
     <div className="container">
     <h1 className="App-h1 col-10">Park Your Car</h1>
     </div>
 
      </header>
      

      <Parking removeAll={this.handleClick} allParking={this.state.park} toggle={this.toggle} onClickSearch={this.onClickSearch} isTrue={this.state.isTrue} />
  
  </div>    
    );
  }
}

export default App;
