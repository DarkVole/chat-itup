 import React, { Component } from 'react';


 class RoomList extends Component {

 	constructor(props) {
 	super(props);
    this.state = {value: ''};
    this.state = {
      rooms: []

    };


this.roomsRef = this.props.firebase.database().ref('rooms')


    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  createRoom(event) {
    this.roomsRef.push({
  		rooms: this.state.value
	});
    alert('A room has been created: ' + this.state.value);
    event.preventDefault();
  }

   componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })  
       this.setState({value: ''});           
     });
   }

// Modify below to handle new Room selection
handleRoomClick(roomName) {
 const isNewRoom = this.state.rooms.roomName;
 console.log(isNewRoom)
 }


   render() {

       return (
       <section className="roomlist">	
       		<form onSubmit={this.createRoom} ><label>Name:
       		<input type="text" value={this.state.value} onChange={this.handleChange} />
       		</label>
       			<input type="submit" value="Submit" />
       			</form>
             		<ul>
               			this.state.rooms.map( (val, index) =>
              				return  key={index} <li> value = {val.rooms} </li>
       				
       	   		
    				 </ul>

       </section>

       );

   }

 }
 
 export default RoomList;