 import React, { Component } from 'react';


 class RoomList extends Component {

 	constructor(props) {
 	super(props);
    this.state = {value: ''};
    this.state = {rooms: []};
    this.roomsRef = this.props.firebase.database().ref('rooms')
    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
                       }

 // Fuctions                      

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  createRoom(event) {
    this.roomsRef.push({rooms: this.state.value});
    alert('A room has been created: ' + this.state.value);
    event.preventDefault();
                        }

handleRoomClick(RoomName) {
 const isNewRoom = this.state.rooms.roomName;
 console.log(isNewRoom);
}


   componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })  
       this.setState({value: ''});           
 //                       }
   
   render() {

   }
 }
 
 export default RoomList;  

