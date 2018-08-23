import React, { Component } from 'react';

import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import * as firebase from 'firebase';

// Initialize Firebase
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
          setActiveRoom: '',
          activeMessages: '',
          roomKey:''
        };

  }

    handleChildClick(activeRoom,event) {
        alert("The Child button data is: " + activeRoom.childText + " - " + activeRoom.childNumber);
        alert("The Child HTML is: " + event.target.outerHTML);
        //remove after working
    }

  render() {
    return (
      <div className="app">
        <h1 className="chat-header">Bloc Chat</h1>
        <h3>Chat Rooms:</h3>
          <RoomList
           firebase= { firebase }
           activeRoom={ this.props.activeRoom }/>
            <MessageList
            firebase= { firebase }
            activeMessages={this.props.activeMessages}/>

      </div>
    );
  }
}

//<h2>Messages</h2>
//<MessageList
//firebase = { firebase }
//messages={ this.state.content } />
export default App;
