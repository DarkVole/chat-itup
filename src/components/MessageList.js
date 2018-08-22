


// Most of this page is setup code that is very similar to RoomList.js 
// but instead of getting the Rooms you are retrieving the Messages.


import React, { Component } from 'react';

class MessageList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: []

        }

        this.messagesRef = this.props.firebase.database().ref('messages')

    }

    componentDidMount() {
        let temp = [];
        this.messagesRef.on('child_added', snapshot => {
            console.log(snapshot.val());
            temp.push(snapshot.val())
            this.setState({
                messages: temp
            })

            console.log(this.state.messages);

        });

    }



    render() {

       //*__________PART 2..... loop through messages
        let messages = this.state.messages.map((val, index) => {
            console.log(val.roomId);

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

export default MessageList