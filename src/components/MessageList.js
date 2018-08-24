// MessageList.js Lists the messages associated with a chosen room

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

// Based on this, I really have to understand what snapshot does.//
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
        {/*OK, this is a learning opp. First time I have seen a return*/}
        {/*that is not directly behind a render.*/}

        let messages = this.state.messages.map((val, index) => {
            if (this.props.activeRoom === val.roomId) { // Check is it has the same roomId as activeRoom
                return <li key={index}>{val.content}</li> // If TRUE...then render

            }
        });

        return (
            <div>

                <h2>Room Messages</h2>
                <ul>
                    {messages}
                </ul>

            </div>

        )

    }
}

 export default MessageList;
