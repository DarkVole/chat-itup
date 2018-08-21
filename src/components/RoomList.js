// RoomList.js
// Provides all the Rooms and the selected Room
// Allows you to Create a room

import React, { Component } from 'react';
//import * as firebase from 'firebase';
 class RoomList extends Component {

     constructor(props) {
         super(props);
         this.state = {
             value: '',
             rooms: [],
             activeRoom: '',
             setActiveRoom: '',
             roomKey: ''
         };


         this.roomsRef = this.props.firebase.database().ref('rooms');
         this.handleChange = this.handleChange.bind(this);
         this.createRoom = this.createRoom.bind(this);
         this.setActiveRoom = this.setActiveRoom.bind(this);
     }  // to Constructor

     // Function Section********************************
     // The function is called when when there is a form submit. It sets
     // the the varible value to the that was entered into the submit
     // form

  handleChange(event) {
    this.setState({value: event.target.value});
  }

     // This function creates a Room from an input box when selected
     // on the click of a submit button
  createRoom(event) {
 	    //RoomRef is the firebase ref from above. We are pushing the value variable
      // that has been declasred as a prop and was attached to the input box.
    this.roomsRef.push({name: this.state.value});
   alert('A room has been created: ' + this.state.value); // delete when working
    event.preventDefault(); //Prevents the event from cause an error
 	}

 	// The setActiveRoom function takes the takes the room that was selected by
     // the array of rooms by the mouse (onClick()), and repressents it by the variable x.
     // This allows the name of the room to be reflected by x.name and the key for
     // the room to be represented by room.key. Both of these because props
     // activeRoom for the selected Room and roomKey for the key.
     setActiveRoom(x) {
         //const roomActive = this.setState({activeRoom:name});
         console.log("Selected " + x.name);  // for debug
         console.log("Key " + x.key);  // for debug
         this.setState({activeRoom:x.name});
         this.setState({roomKey:x.key});
         console.log( this.state.activeRoom ) // valid prop is working
     }

     componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
       this.setState({value: ''});
     });}


   //Comments are not allow in render.
     // The first part is the form that, when the Submit value is click on,
     // takes value and executes the handleChange function using the variable value.
     // The .map loop runs through the rooms array from fiebase, and lists them in
     // room.name.
     // An event, onClick, has been added, which runs the function setActionRoom,
     // bringing allow the room variable. This sets the variable of the selected
     // room, which becomes the prop variable activeRoom, and can be used in
     // app.js and other components.

    render() {
       return (
           <section className="roomlist">
            <form onSubmit={this.createRoom} ><label>Name:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
            </form>
            <ul>
            {this.state.rooms.map(function(val,index){
                return <li key={index}>{val.name}</li> })}
                </ul>
                </section>
       );
   }

}
 export default RoomList;



