import React, {
    Component
} from 'react';
import {
    Button
} from 'reactstrap';

import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

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


    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        this.setState({
            value2: event.target.value2
        });
        console.log(event.target.value2);
    }

    createRoom(event) {
        this.roomsRef.push({
            roomName: this.state.value
        });
        event.preventDefault(); //Prevents the event from cause an error
    }

    deleteRoom(event) {
        console.log(this.props.displayRoomName)
        this.props.displayRoomName ? alert("Are you sure you want to delete " + this.props.displayRoomName + "?") :
            alert("Error - No Room Selected");
        this.roomsRef.child(this.props.activeRoom).remove();
        window.location.reload()
    }

    renameRoom(event) {

        this.roomsRef.child(this.props.activeRoom).update({
            roomName: this.state.value
        });
        window.location.reload()
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key; // roomkey errors mean firebase entry error
            this.setState({
                rooms: this.state.rooms.concat(room)
            })
            this.setState({
                value: ''
            });
        });
    }


    render() {
        return (

            this.state.rooms.map((val, index) => {
                return ( < ListGroupItem className = "px-4" color="link" onClick={()=>this.props.setRoom(val.key,val.roomName)}
                    key = {
                        index
                    } > {
                        val.roomName
                    } < /ListGroupItem>



                )
            })
            
        )
    }
}

export default RoomList;
