 import React, { Component } from 'react';

 class MessageList extends Component {

 	constructor(props) {
 	super(props);

    this.state = {
      messages: [],
      value: ''
    };
//console.log (this.state.roomdId);
    this.messagesRef = this.props.firebase.database().ref('messages');

 //   this.handleChange = this.handleChange.bind(this);
 //   this.createRoom = this.createRoom.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

//  createMessage(event) {
//    this.messagesRef.push({
//  		messages: this.state.value
//	});
//    alert('A message has been created: ' + this.state.value);
 //   event.preventDefault();
 // }

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
       return (
       <section className="messagelist">	
          <ul>
            this.state.messages.map( (val, index) =>
              return  key={index} <li> value = {val.contents} </li>
           </ul>
        </section>
               );
              }

 }
 
 export default MessageList;