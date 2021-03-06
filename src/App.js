import React, { Component } from 'react';

import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';
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
            activeUser: '',
            displayRoomName: '',
            displayUserName: '',
            displayMessageContent: '',
            activeUser: '',
            users:[]
        };
        this.setUser = this.setUser.bind(this);
        this.setRoom = this.setRoom.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }


  //*****Functions*********
    setRoom=(roomKey,roomName, roomIndex)=> { //_______________Part 1 - Set roomKey at Parent
        console.log(this.state.displayRoomName);
        this.setState({activeRoom: roomKey})
        this.setState({displayRoomName: roomName})// Note curly inside regular parans
        this.setState({activeRoomIndex: roomIndex})
    }

    setMessage=(key,name )=> { //_______________Part 1 - Set roomKey at Parent

        this.setState({activeMessage: key})
        this.setState({displayMessageContent: name})// Note curly inside regular parans
        console.log(this.state.displayMessageContent);
  }


setUser=(user)=> {
        this.setState({activeUser: user})
}

  render() {
    return (
      <div className="app">  {/*Will List Headers and Rooms*/}
      <img src="https://i.imgur.com/Wg9WVCi.jpg"  alt="chat logo"  width="100">
    </img>
        <h1 className="chat-header">Bloc Chat</h1>
        <h3>Chat Rooms:</h3>
          <RoomList firebase={firebase} setRoom = {this.setRoom} displayRoomName = {this.state.displayRoomName} activeRoom = {this.state.activeRoom}/>
          <p></p>
            <MessageList firebase={firebase} activeRoom = {this.state.activeRoom} displayRoomName = {this.state.displayRoomName} user = {this.state.activeUser} setMessage = {this.setMessage} displayMessageContent = {this.state.displayMessageContent}/>  {/*Note firebase = {firebase} is required*/}
      <User firebase={firebase} setUser = {this.setUser} user = {this.state.activeUser }/>

      </div>
    );
  }

}

export default App;
// App.js
// Functions
//  setRoom=(roomKey,roomName) takes the key and roomName from firebase rooms
//      and sets them to activeRoom and displayRoomName (W. Turner original format -
//      replace when able.
//  setUser=(userKey,userName) is a copy of above for users. Remove key method
//      able.
