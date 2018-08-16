 import React, { Component } from 'react';

 class MessageList extends Component {

 	constructor(props) {
 	super(props);

        this.state = { content: [], roomdId: [], sendAt: [], username: [] };
//console.log (this.state.roomdId);
    this.messagesRef = this.props.firebase.database().ref('messages');

 //   this.handleChange = this.handleChange.bind(this);
 //   this.createRoom = this.createRoom.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }


   componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
    console.log(snapshot);
    const message = snapshot.val();
     message.key = snapshot.key;
    this.setState({ messages: this.state.messages.concat( message ) })
   //this.setState({value: ''});           
    });
  }
   

    render() {
     return(
       <ul>
         {this.state.messages.map(function(val, index){
          return <li key={index}>{val.content} </li> })}
        </ul>
      );
    }
   }
       
      
       
 export default MessageList;