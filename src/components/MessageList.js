import React, {
    Component
} from 'react';
import {
    Button
} from 'reactstrap';

import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import {
    Alert
} from 'reactstrap'
import {
    Badge
} from 'reactstrap';
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

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
                return <ListGroupItem className = "px-4"
                color = "info"
                tag = "a"
                href = "#"
                onClick = {
                    () => this.setMessage(val.key, val.content)
                }
                key = {
                        index
                    } > {
                        val.content + ": " + this.createTimeFormat(val.sentAt)
                    } <
                    /ListGroupItem>
            }
        });
        return ( <
            section className = "addingMessage" >

            <
            h3 className = "text-info pt-3 px-3" > Room Selected: < Badge color = "secondary" > {
                this.props.displayRoomName ? this.props.displayRoomName : "None - Messages go to Default"
            } < /Badge> < /h3 >

            <
            ul > {
                messages
            } <
            /ul>

            <
            h4 className = "text-info pt-3 px-3" > Message Selected: < Badge className = "text-left"
            color = "secondary" > {
                this.state.displayMessageContent ? this.state.displayMessageContent : "None Selected"
            } < /Badge> < /h4 >

            <
            Button className = "ml-3 mb-3"
            onClick = {
                this.deleteMessage
            }
            color = "danger" > Delete Selected Message ? < /Button>{this.deleteMessage}



            <
            Form >

            <
            FormGroup className = "mt-5 px-3"
            onSubmit = {
                this.renameMessage
            }
            onChange = {
                this.handleChange
            } >
            <
            Label
            for = "exampleText" > Update Message < /Label> <
            Input type = "textarea"
            name = "text"
            id = "exampleText" / >
            <
            /FormGroup>

            <
            Button className = "ml-3 mb-3"
            color = "warning" > Change < /Button>

            <
            FormGroup className = "mt-5 px-3"
            onSubmit = {
                this.createMessage
            }
            onChange = {
                this.handleChange
            } >
            <
            Label
            for = "exampleText" > New Message < /Label> <
            Input type = "textarea"
            name = "text"
            id = "exampleText"
            value = {
                this.state.value
            }
            /> <
            /FormGroup>
            <
            Button className = "ml-3 mb-3"
            color = "primary" > Create < /Button> <
            /Form>

            <
            /section>          


        );
    }
}


export default MessageList;
