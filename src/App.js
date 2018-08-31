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
            activeUser: '',
            users:[]
        };
        this.setUser = this.setUser.bind(this)
        this.setRoom = this.setRoom.bind(this); //Bind function - Need to understand
        //   more about the differences between bind, this.state for activeRoom
    }


  //*****Function/Method setRoom sets the activeRoom to the value of roomKey
    setRoom=(roomKey,roomName)=> { //_______________Part 1 - Set roomKey at Parent
        console.log(this.state.displayRoomName);
        this.setState({activeRoom: roomKey})
        this.setState({displayRoomName: roomName})// Note curly inside regular parans
    }

setUser=(userKey,userName)=> {
    console.log(this.state.userName);
 //   this.setState({activeRoom: userKey})
 //   this.setState({displayUserName: userName})// Note curly inside regular parans
}

  render() {
    return (
      <div className="app">  {/*Will List Headers and Rooms*/}
        <h1 className="chat-header">Bloc Chat</h1>
        <h3>Chat Rooms:</h3>
          <RoomList firebase={firebase} setRoom = {this.setRoom}/> {/*Calls bind function. Why is this required? */}
          <p></p>
            <MessageList firebase={firebase} activeRoom = {this.state.activeRoom} displayRoomName = {this.state.displayRoomName}/>  {/*Note firebase = {firebase} is required*/}
<User firebase={firebase} setUser = {this.setUser} displayUserName = {this.state.displayUserName}/>


      </div>
    );
  }

}

export default App;
