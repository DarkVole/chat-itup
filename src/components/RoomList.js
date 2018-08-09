 import React, { Component } from 'react';




 class RoomList extends Component {

 	constructor(props) {
 	super(props);
  
    this.state = {
      rooms: []
    };
}
   
//this.roomsRef = this.props.firebase.database().ref('rooms');

   render() {
     return (
       <li>a todo will go here</li>
     );
   }
 }
 
 export default RoomList;