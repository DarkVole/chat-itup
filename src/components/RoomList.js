// RoomList.js
// Lists all the Rooms
// Allows you to create a Room
// Allows you to select a room and display its messages


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
    }

    // *****Function Section********************************

    // This function [handleChange(event)] is called when when there is
    // form submit. It sets the the varible value to the that was
    // entered into the form
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // This function creates a Room from an input box when selected
    // on the click of a submit button
    createRoom(event) {
        //RoomRef is the firebase ref from above. We are pushing the value variable
        // that has been declasred as a prop and was attached to the input box.
        this.roomsRef.push({rooms: this.state.value});
        alert('A room has been created: ' + this.state.value); // delete when working
        event.preventDefault(); //Prevents the event from cause an error
    }


// An internal function that executes all of the commands inside of it.
    // It occurs when this component did successful execute, or mount
    // Follow up Q: What does snapshot do?
    // Q: Why does room.key not need a const or this.setState?
    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
            this.setState({ value: '' });
        });
    }



    //Comments in render must look like {/*Comments*/}


    render() {
        return (
            <section className="roomlist"> {/*Renders form for new room*/}
            <form onSubmit={this.createRoom} ><label>Name:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
            </form>
            <ul>{/*The beloved .map function -- use THIS format*/}
        {
            this.state.rooms.map((val,index)=>{
                /*_______PART 1_______*/
                return <li onClick={()=>this.props.setRoom(val.key,val.roomName)} key={index}>{val.roomName}</li> })
            }

            </ul>

        </section>

        );
    }

}
export default RoomList;
