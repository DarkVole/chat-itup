

    import React, { Component } from 'react';
 import * as firebase from 'firebase';

    class MessageList extends Component {

     constructor(props){
         super(props);
         this.state = {
             value: '',
             rooms: [],
             activeRoom: '',
             //setActiveRoom: '',
             roomKey:''

         };


         componentDidMount() {
                 const mess = snapshot.val();
                 mess.key = snapshot.key;
                 // this.setState({ rooms: this.state.rooms.concat( room ) })
                 this.setState({value: ''})};



     // setActiveMessage(x) {
 
      //     console.log("Content " + x.content);
      //     console.log("UserId " + x.username);
      //     this.setState({activeMessages:x.content});
      // }
//<div> seems important here for some reason ???
    render() {
         return (
             <div>

             <h2>Hello World</h2>
            <ul>
        <this.state.messagess.map ( (mess, index) =>
        <li key={index}> {mess.content}></li>
        </ul>

    </div>)
    );


    }

 export default MessageList;

//         this.state = {
//          rooms: [],ref
//          activeRoom: '',
//          roomKey:'',
//          messages: [],
//              content: '',
//              roomId: '',
//              sendAt: '',
//              username: ''

//             <ul>
//              {
//              this.state.messages.map( (mess, index) =>
//                  <li key={index}>{mess.contents}</li>
//              )}
//              </ul