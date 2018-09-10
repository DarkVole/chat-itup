
import React, { Component } from 'react';
class RoomList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            rooms: [],
        };

        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.handleChange = this.handleChange.bind(this);
        this.createRoom = this.createRoom.bind(this);
        this.deleteRoom = this.deleteRoom.bind(this);
        this.renameRoom = this.renameRoom.bind(this);
    }

    // *****Functions - Descriptions at bottom ********************************

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    createRoom(event) {
        this.roomsRef.push({roomName: this.state.value});
        event.preventDefault(); //Prevents the event from cause an error
    }

  deleteRoom() {

    let txt = this.props.displayRoomName ?  this.props.displayRoomName : alert("Error - No Room Selected")

  }

  renameRoom(event) {
    alert ("rename room called");
  }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
            this.setState({ value: '' });
        });
    }

    render() {
        return (
            <section className="roomlist"> {/*Renders form for new room*/}
              <form onSubmit={this.createRoom} ><label>Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
              </form>
            <ul>
            {
            this.state.rooms.map((val,index)=>{
                return <li onClick={()=>this.props.setRoom(val.key,val.roomName)} key={index}>{val.roomName}</li> })
            }
            </ul>
            <button onClick = {this.deleteRoom}>Delete Selected Room?</button>
            <button onClick ={this.renameRoom}>Rename Selected Room?</button>
            </section>

        );
    }

}
export default RoomList;

// *RoomList.js*
// Lists all the Rooms, allows you to create a Room, allows you to select a room and display its messages
// Functions
//   handleChange(event) occurs with every change
//   createRoom(event) pushes a new room name to firebase from a Submit form
//   componentDidMount() executes all statements within it when this component starts
//      The statements make a copy of the firebase rooms using snapshot
//      and then concat
// Comments in render must look like {/*Comments*/}
