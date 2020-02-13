import React, { Component } from 'react'

import { randomHexColor,getCurrentDay, acronym } from 'halfeind-utils'

export default class App extends Component {
  render () {
    return (
      <>
        <div style={{width:'100%',height:'100%',backgroundColor:randomHexColor()}}></div>
      </>
    )
  }
}
