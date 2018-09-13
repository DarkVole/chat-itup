
import React, { Component } from 'react';
class RoomList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value2: '',
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
        this.setState({value2: event.target.value2});
        console.log(event.target.value2);
    }

    createRoom(event) {
        this.roomsRef.push({roomName: this.state.value});
        event.preventDefault(); //Prevents the event from cause an error
    }

    deleteRoom(event) {
      console.log(this.props.displayRoomName)
        this.props.displayRoomName ? alert ("Are you sure you want to delete "+  this.props.displayRoomName+"?")
        : alert("Error - No Room Selected");
        this.roomsRef.child(this.props.activeRoom).remove();
        window.location.reload()
    }

      renameRoom(event) {
          //alert (this.props.displayRoomName);
          this.roomsRef.child(this.props.activeRoom).update({roomName: this.state.value});
          window.location.reload()
        }

    componentDidMount() {
            this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key; // roomkey errors mean firebase entry error
            this.setState({ rooms: this.state.rooms.concat( room ) })
            this.setState({ value: '' });
        });
      }

    render() {
        return (
            <section className="roomlist"> {/*Renders form for new room*/}
              <form onSubmit={this.createRoom} ><label>New Room Name:
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
            <button onClick={this.deleteRoom}>Delete Room</button>

            <form onSubmit={this.renameRoom} ><label>Changed Room Name:
            <input type="text" value2={"Test Room"} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit New Room Name" />
            </form>
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
