 import React, { Component } from 'react';


//this.roomsRef = this.props.firebase.database().ref('rooms');

 class RoomList extends Component {

 	constructor(props) {
 	super(props);
  
    this.state = {
      rooms: []
    };
}
   

   render() {
     return (
       <li>a todo will go here</li>
     );
   }
 }
 
 export default RoomList;