import React, { Component } from 'react'

import { randomHexColor,getCurrentDay, acronym, isEmail } from 'halfeind-utils'

export default class App extends Component {
  render () {
    console.log(isEmail("test@e.be"));
    return (
      <>
        <div style={{width:'100%',height:'100%',backgroundColor:randomHexColor()}}></div>
      </>
    )
  }
}
