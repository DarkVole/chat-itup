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
            displayRoomName: ''
        };
        this.setUser = this.setUser.bind(this)
        this.setRoom = this.setRoom.bind(this); 

    }


    setRoom = (roomKey, roomName) => { 
        console.log(this.state.displayRoomName);
        this.setState({ activeRoom: roomKey })
        this.setState({ displayRoomName: roomName }) 
    }

    setUser=(user)=> {
        this.setState({activeUser: user});
   
    }


    render() {

      


      return (
        <div className="app">  
          <h1 className="chat-header">Bloc Chat</h1>
          <h3>Chat Rooms:</h3>
          <RoomList firebase={firebase} setRoom = {this.setRoom}/>
          <MessageList firebase={firebase} activeRoom = {this.state.activeRoom} displayRoomName = {this.state.displayRoomName}/> 
          <User firebase={firebase} setUser = {this.setUser} user = {this.state.activeUser}/>
        </div>
      );
  }

}

export default App;
