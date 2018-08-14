 import React, { Component } from 'react';


 class RoomList extends Component {

 	constructor(props) {
 	super(props);
    this.state = {
      value: '',
      rooms: []
    };
  }

 // Fuctions                      

 // handleChange(event) {
 //   this.setState({value: event.target.value});
 // }

  createRoom(event) {
    this.roomsRef.push({rooms: this.state.value});
    //alert('A room has been created: ' + this.state.value);
    event.preventDefault();
                        }

handleRoomClick(RoomName) {
 const isNewRoom = this.state.rooms.roomName;
// console.log(isNewRoom);
return (isNewRoom);
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
     return(
      <section>
      <ul>
		      <form onSubmit={this.createMessage} ><label>Name:
      	   <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
          </form>

     
     </ul>
        </section>
      );
   }
 }
 
  
 export default RoomList;  

