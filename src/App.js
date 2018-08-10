import React, { Component } from 'react';

import './App.css';
import RoomList from './components/RoomList.js';
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
  render() {
    return (
      <div className="App">
      <RoomList/>
      </div>
    );
  }
}

export default App;
