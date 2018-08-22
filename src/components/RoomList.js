 import React, { Component } from 'react';


 class RoomList extends Component {

     constructor(props) {
         super(props);
         this.state = { value: '' };
         this.state = {
             rooms: []
         };

         this.roomsRef = this.props.firebase.database().ref('rooms')
         this.handleChange = this.handleChange.bind(this);
         this.createRoom = this.createRoom.bind(this);
     }

     handleChange(event) {
         this.setState({ value: event.target.value });

     }

     createRoom(event) {

         event.preventDefault();
         this.roomsRef.push({
             rooms: this.state.value
         });

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
              <div>
                
                 <section className="roomlist">  

                    <form onSubmit={this.createRoom}>
                       <label>Name:
                       <input type="text" value={this.state.value} onChange={this.handleChange} />
                       </label>
                       <input type="submit" value="Submit" />
                    </form>
         
                    <ul>

                    {
                      this.state.rooms.map((val,index)=>{

                                   /*_______PART 1_______*/
                        return <li onClick={()=>this.props.setRoom(val.key)} key={index}>{val.rooms}</li> })
                    }

                    </ul>

                  </section>
                     

            

              </div>

             )
         }
}
     
export default RoomList;

