import React, { Component } from 'react';
import data from '../data/data';

class ContactInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.toggleContact = this.toggleContact.bind(this)
  }

  toggleContact = () => {
    this.setState(prevState =>({
      show: !prevState.show
    }))
  }
  render() {
    const {item} = this.props
    return(
      <ul>
        <li onClick={this.toggleContact}>
          {item.first} {item.last}
      {
           this.state.show &&
            <div>
              <div> Age: {item.age} </div>
              <div> Stage: {item.state} </div>
              <div> Email: {item.email} </div>
            </div>
      }
        </li>
      </ul>
      )
  }
}

class ToggleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data,
      isLoading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState => ({
       isLoading: false
      }))
    }, 3000)

  }
  render() {
    if(this.state.isLoading) {
      return (
        <h3> Loading...</h3>
        )
    }
const {data} = this.state
    return(
      <div>
   {this.state.data.map(item => (<ContactInfo item={item} key={item.id}/>) )}
      </div>
  )
}
}


export default ToggleList;


//you can use this without bind
//bind has to be in the constructor, it sees it as a normal method

//bind tells you that the function has events
// <li onClick={() => this.toggleContact()}>
