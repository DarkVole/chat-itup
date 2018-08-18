 import React, { Component } from 'react';


 class RoomList extends Component {

 	constructor(props) {
 	super(props);
    this.state = {
      value: '',
      rooms: [],
        activeRoom: '',
        setActiveRoom: '',
        roomKey:''
    };




this.roomsRef = this.props.firebase.database().ref('rooms')
        this.UserRef = this.props.firebase.database().ref('UserID')
        this.MessageRef = this.props.firebase.database().ref('messages')



    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
        this.setActiveRoom = this.setActiveRoom.bind(this);


    }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  createRoom(event) {
    this.roomsRef.push({name: this.state.value});
   alert('A room has been created: ' + this.state.value);
    event.preventDefault();
                        }
     setActiveRoom(x) {
         //const roomActive = this.setState({activeRoom:name});
         console.log("Selected " + x.name);
         console.log("Key " + x.key);
         this.setState({activeRoom:x.name});
         this.setState({roomKey:x.key});
         console.log( this.state.activeRoom )

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
          <li key={index} onClick={() => this.setActiveRoom(room)}  >{room.name}</li>


        )}

                  </ul>
        <h2>Room Selected</h2>
<p>{ this.state.activeRoom }</p>
       </section>
       );
   }
 }
 
  
 export default RoomList;  

