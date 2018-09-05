
import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            username: '',
            content: '',
            roomId: '',
            sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
        }
        this.messagesRef = this.props.firebase.database().ref('messages');
    }
    // **********Functions **********************
    componentDidMount() {
        let temp = [];
        this.messagesRef.on('child_added', snapshot => {
            console.log(snapshot.val());
            temp.push(snapshot.val());
            this.setState({
                messages: temp
            })
        });
    }

    render() {
        let messages = this.state.messages.map((val, index) => {
            if (this.props.activeRoom === val.roomId) {
                return <li key={index}>{val.content}</li>
            }
        });
        return (
            <div>
                <h3>Room Selected: {this.props.displayRoomName}</h3>
                <h3>Room Messages</h3>
                <ul>
                    {messages}
                </ul>
            </div>
        )
    }
}

 export default MessageList;
// MessageList.js Lists the messages associated with a chosen room
//     componentDidMount() loads a copy of the firebase messages