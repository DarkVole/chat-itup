import React, { Component } from 'react';

import './App.css';
import RoomList from './components/RoomList.js';
//import MessageList from './components/MessageList.js';
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDx4OOWjNLsnDxkWrUbKZgYITBKcrWvAT8",
    authDomain: "bloc-chat-125e6.firebaseapp.com",
    databaseURL: "https://bloc-chat-125e6.firebaseio.com",
    projectId: "bloc-chat-125e6",
    storageBucket: "bloc-chat-125e6.appspot.com",
    messagingSenderId: "1073569690929"
  };

  firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
    super(props);
      this.state = {
            activeRoom: '',
          setActiveRoom: ''
        };

  }

 setActiveRoom(name) {
    const roomActive = this.setState({activeRoom:name});
    console.log({activeRoom:name});

  }

  render() {
    return (
      <div className="app">
        <h1 className="chat-header">Bloc Chat</h1>
        <h3>Chat Rooms:</h3>
          <RoomList
           firebase= { firebase }
           setActiveRoom={ this.state.setActiveRoom }
           activeRoom={this.state.activeRoom}
      />
 <h2>Room Selected</h2>
       <p>"Active Room - This is just text until the error is removed"</p>

      </div>
    );
  }
}
//<h2>Messages</h2>
//<MessageList
//firebase = { firebase }
//messages={ this.state.content } />
export default App;
