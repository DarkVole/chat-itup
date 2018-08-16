 import React, { Component } from 'react';


 class RoomList extends Component {

 	constructor(props) {
 	super(props);
    this.state = {
      value: '',
      rooms: [],
        activeRoom: '',
        setActiveRoom: '',
    };



this.roomsRef = this.props.firebase.database().ref('rooms')


    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  createRoom(event) {
    this.roomsRef.push({rooms: this.state.value});
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
    render() {
       return (
       <section className="roomlist"> 
       <form onSubmit={this.createRoom} ><label>Name:
       <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
       </form>
<ul> 
  {
         this.state.rooms.map ( (room, index) =>
          <li key={index} onClick={() => this.props.setActiveRoom(room.rooms)}  >{room.rooms}</li>

        )}

                  </ul>

       </section>
       );
   }
 }
 
  
 export default RoomList;  

