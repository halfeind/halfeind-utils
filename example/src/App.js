import React, { Component } from 'react'

import { getCurrentDayName } from 'halfeind-utils'

export default class App extends Component {
  render () {
    console.log(getCurrentDayName());
    return (
      <></>
    )
  }
}
