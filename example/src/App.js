import React, { Component } from 'react'

import { randomHexColor, LocalStorage} from 'halfeind-utils'
export default class App extends Component {

  render () {
    LocalStorage.set('a','b');
    return (
       <> 
        <div style={{width:'100%',height:'100%',backgroundColor:randomHexColor()}}></div>
      </>
    )
  }
}