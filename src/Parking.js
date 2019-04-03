import React, { Component } from 'react'
import Space from './Space'

import Tabs from './Tabs';


export default class Parking extends Component {

    state = {
        allParking: this.props.allParking,
    
    }


  render() {


   let parks = this.state.allParking.map((park, index)=>{
return <Space taken={park} key={index} toggle={()=>{this.props.toggle(index)}} />
    })


    return ( 
        <div  className="row">
        <div className="col-5">
        <div className="form1">
      <Tabs  removeAll={this.props.removeAll} />
     
            <h1 className="space">Find the available parking</h1> 
             <button className="button1 " onClick={()=>this.props.onClickSearch()}>search</button>
          </div>
        </div>
        <div className="col-7 imgCorner ">
        <div id="spaceParking">
         <div className ={"row " +this.props.isTrue}>{parks}</div> 
      </div>
      </div>
      </div>
    )
  }
}
