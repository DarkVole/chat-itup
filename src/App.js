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
  constructor(props){
    super(props)
    this.state = {
      activeRoom: undefined//___________Part 1
    };

    this.setRoom = this.setRoom.bind(this);
  }


  setRoom(roomKey){ //_______________Part 1
    console.log(roomKey);
    this.setState({activeRoom:roomKey})  

  }


  render() {
    return (
      <div className="App">                 {/*Part 1*/}
        <RoomList firebase={firebase} setRoom = {this.setRoom}/>


        {/*Part 2*/}
        
        <MessageList firebase={firebase} activeRoom = {this.activeRoom}/>
      

      </div>
    );
  }
}

export default App;
