 import React, { Component } from 'react';

 class MessageList extends Component {

     constructor(props) {
         super(props);
         this.state = {
             value: '',
             activeRoom: '',
             content: [],
             roomdId: [],
             sendAt: [],
             messages: [],
             activeMessages: '',
             username: []
         };


         this.roomsRef = this.props.firebase.database().ref('rooms')
         this.UserRef = this.props.firebase.database().ref('UserID')
         this.MessageRef = this.props.firebase.database().ref('messages')
     }

     render() {

         return (
             < section className = "messagelist" >
             < h2 > Messages < /h2>
             < ul >
             this.state.messages.map((mess, index) =>
             < li key = {index} > {mess.contents}<li>

             < /ul>
         < /section>

     );
     }

 }


       
 export default MessageList;

 //Trashcan
 // Remove after Checkpoint submission
 //
 //          <h2>Message</h2>
 //          {
 //              this.state.messages.map ( (mess, index) =>
 //          <li key={index}  >{this.props.mess.content}</li>
 //
 //
 //     )}
 //
 //     </ul>

 //   componentDidMount() {
 //     this.messagesRef.on('child_added', snapshot => {
 //     console.log(snapshot);
 //     const message = snapshot.val();
 //      message.key = snapshot.key;
 //     this.setState({ messages: this.state.messages.concat( message ) })
 //    //this.setState({value: ''});
 //     });
 //   }

 //     setActiveMessage(x) {
 //
 //          console.log("Content " + x.content);
 //          console.log("UserId " + x.username);
 //          //this.setState({activeRoom:x.name});
 //          //return this.props.activeRoom = this.setState({activeRoom:x.key});
 //          //console.log( this.state.activeRoom )
 //      }
 //  handleChange(event) {
 //     this.setState({value: event.target.value});
 //
 //   }