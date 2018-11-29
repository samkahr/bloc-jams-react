import React, { Component } from 'react';


class NewRoom extends Component {
  constructor () {
    super ()
    this.state = {
      roomName: ''
    }
  }
addRoom (e) {
  this.setState({
    roomName: e.target.value
  })
}

handleSubmit


  render () {
    return (
   <form onSubmit={this.handleSubmit}>
    <input
      type="text"
      placeholder="Type New Room Name"
      value={this.newRoomName}
      onChange={ (e) => this.addRoom(e) }
     />
<input type="submit" />
</form>

    }
  }

Export defaul NewRoom.js
