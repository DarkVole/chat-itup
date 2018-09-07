
import React, { Component } from 'react';


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messages: []

        }
        this.messagesRef = this.props.firebase.database().ref('messages');
        this.handleChange = this.handleChange.bind(this);
        this.createMessage = this.createMessage.bind(this);
    }
    // **********Functions **********************
    componentDidMount() {
        let temp = [];


              this.messagesRef.on('child_added', snapshot => {
                  const message = snapshot.val();
                  message.key = snapshot.key;
                  this.setState({ messages: this.state.messages.concat( message ) })
                  this.setState({ value: '' });
              });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
    }

    createMessage(event) {

        this.messagesRef.push({content: this.state.value,
          sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
        roomId: this.props.activeRoom ? this.props.activeRoom : "-LLpPzOidUxEPPpemVXb" ,
      userName: this.props.user ? this.props.user.displayName : 'Guest'});

        event.preventDefault(); //Prevents the event from cause an error


    }

    render() {
        let messages = this.state.messages.map((val, index) => {
            if (this.props.activeRoom === val.roomId) {
                return <li key={index}>{val.content}</li>
            }
        });
        return (
            <section className="addingMessage">
                <h3>Room Selected: {this.props.displayRoomName ? this.props.displayRoomName : "None - Messages go to Main"}</h3>
                <h3>Room Messages</h3>
                <ul>
                    {messages}
                </ul>

                <form onSubmit={this.createMessage} ><label>Message:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </section>
        )
    }
}

 export default MessageList;
// **********Comments Section****************
// MessageList.js Lists the messages associated with a chosen room
//     componentDidMount() loads a copy of the firebase messages
