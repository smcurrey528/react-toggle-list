import React, { Component } from 'react';
import data from '../data/data';

class ContactInfo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {item} = this.props
    return(
      <ul>
      <li>{item.first} {item.last}
      </li>
      </ul>
      )
  }
}

class ToggleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data
    }
  }
  render() {
const {data} = this.state
    return(
      <div>
   {this.state.data.map(item => (<ContactInfo item={item} key={item.id}/>) )}
      </div>
  )
}
}


export default ToggleList;
