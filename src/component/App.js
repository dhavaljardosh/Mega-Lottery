import React, { Component } from 'react'
import LotteryData from './LotteryData'

export default class App extends Component {
    
  render() {
    const imgUrl = "/background.png"
    return (
      <div style={{
      background:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + imgUrl + ')',
      backgroundSize: 'contain',
      overflow: 'hidden',
      height:'100vh'}}>
        <LotteryData/>
        <div style={{display:'flex', alignItems:'center', marginTop:20}}>
        <img src={process.env.PUBLIC_URL + '/mm_icon.png'} style={{height:30, margin:'auto'}}/>

        </div>
      </div>
    )
  }
}
