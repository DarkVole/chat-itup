import React, {
    Component
} from 'react';


class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messages: [],
            activeMessage: '',


        }
        this.messagesRef = this.props.firebase.database().ref('messages');
        this.handleChange = this.handleChange.bind(this);
        this.createMessage = this.createMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.renameMessage = this.renameMessage.bind(this);
    }
    // **********Functions **********************
    componentDidMount() {

        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({
                messages: this.state.messages.concat(message)
            })
            this.setState({
                value: ''
            });
        });
    }

    renameMessage(event) {

        console.log(this.state.activeMessage)
        this.messagesRef.child(this.state.activeMessage).update({
            content: this.state.value
        });
        window.location.reload()
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        console.log(event.target.value);
    }

    createTimeFormat(timestamp) {
        var date = new Date(timestamp),
            datevalues = [
                   date.getFullYear(),
                   date.getMonth() + 1,
                   date.getDate(),
                   date.getHours(),
                   date.getMinutes(),
                   date.getSeconds(),

                ]; //=> [2011, 3, 25, 23, 0, 0]
        var formatDate = datevalues[3] + ":" + datevalues[4] + " " + datevalues[1] + "/" + datevalues[2] + "/" + datevalues[0];
        return formatDate
    }

    createMessage(event) {
        this.messagesRef.push({
            content: this.state.value,
            sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
            roomId: this.props.activeRoom ? this.props.activeRoom : "-A1000",
            userName: this.props.user ? this.props.user.displayName : 'Guest'
        });

        event.preventDefault(); //Prevents the event from cause an error
    }

    deleteMessage(event) {
        this.messagesRef.child(this.state.activeMessage).remove();
        window.location.reload()
    }

    setMessage = (roomKey, roomName) => { 
        console.log(roomKey);
        this.setState({
            activeMessage: roomKey
        })
        this.setState({
            displayMessageContent: roomName
        }) // Note curly inside regular parans
        console.log(this.state.activeMessage)
    }

    render() {
        let messages = this.state.messages.map((val, index) => {
            if (this.props.activeRoom === val.roomId) {
                return <li onClick = {
                    () => this.setMessage(val.key, val.content)
                }
                key = {
                    index
                } > {
                    val.content + ": " + this.createTimeFormat(val.sentAt)
                } < /li>

            }
        });
        return ( <
            section className = "addingMessage" >
            <
            h3 > Room Selected: {
                this.props.displayRoomName ? this.props.displayRoomName : "None - Messages go to Default"
            } < /h3> <
            h3 > Room Messages < /h3>

            <
            ul > {
                messages
            } <
            /ul>

            <
            button onClick = {
                this.deleteMessage
            } > Delete Selected Message < /button>

            <
            form onSubmit = {
                this.renameMessage
            } > < label > Update Message:
            <
            input type = "text"
            value2 = {
                "Test Message"
            }
            onChange = {
                this.handleChange
            }
            /> <
            /label> <
            input type = "submit"
            value = "Change" / >
            <
            /form>

            <
            form onSubmit = {
                this.createMessage
            } > < label > Message:
            <
            input type = "text"
            value = {
                this.state.value
            }
            onChange = {
                this.handleChange
            }
            /> <
            /label> <
            input type = "submit"
            value = "Submit" / >
            <
            /form>

            <
            h3 > Message Selected: {
                this.state.displayMessageContent ? this.state.displayMessageContent : "None Selected"
            } < /h3>

            <
            /section>

        )
    }
}

export default MessageList;

