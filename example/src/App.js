import React, { Component } from 'react'

import { getDayByDate } from 'halfeind-utils'

export default class App extends Component {
  render () {
    console.log(getDayByDate(1,3,2019));
    return (
      <></>
    )
  }
}
