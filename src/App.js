import React, {
    Component
} from 'react';

import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDx4OOWjNLsnDxkWrUbKZgYITBKcrWvAT8",
    authDomain: "bloc-chat-125e6.firebaseapp.com",
    databaseURL: "https://bloc-chat-125e6.firebaseio.com",
    projectId: "bloc-chat-125e6",
    storageBucket: "bloc-chat-125e6.appspot.com",
    messagingSenderId: "1073569690929"
};

firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRoom: '',
            activeUser: '',
            displayRoomName: '',
            displayUserName: '',
            displayMessageContent: '',
            activeUser: '',
            users: []
        };
        this.setUser = this.setUser.bind(this);
        this.setRoom = this.setRoom.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }


    //*****Functions*********
    setRoom = (roomKey, roomName, roomIndex) => { //_______________Part 1 - Set roomKey at Parent
        console.log(this.state.displayRoomName);
        this.setState({
            activeRoom: roomKey
        })
        this.setState({
            displayRoomName: roomName
        }) // Note curly inside regular parans
        this.setState({
            activeRoomIndex: roomIndex
        })
    }

    setMessage = (key, name) => { //_______________Part 1 - Set roomKey at Parent

        this.setState({
            activeMessage: key
        })
        this.setState({
            displayMessageContent: name
        }) // Note curly inside regular parans
        console.log(this.state.displayMessageContent);
    }


    setUser = (user) => {
        this.setState({
            activeUser: user
        })
    }

    render() {
        return ( <
            div className = "app" > {
                /*Will List Headers and Rooms*/
            } <
            img src = "https://thumbs2.imgbox.com/94/b7/QNWZcD2x_t.png"
            alt = "chat logo"
            width = "100" >
            <
            /img> <
            h1 class = "display-4 bg-warning test-dark p-2" > Chat It Up! < /h1> <
            h3 class = "display-5" > Chat Rooms: < /h3> <
            RoomList firebase = {
                firebase
            }

            displayRoomName = {
                this.state.displayRoomName
            }
            setRoom = {
                this.setRoom
            }
            activeRoom = {
                this.state.activeRoom
            }
            MessageList firebase = {
                firebase
            }
            activeRoom = {
                this.state.activeRoom
            }
            displayRoomName = {
                this.state.displayRoomName
            }
            user = {
                this.state.activeUser
            }
            setMessage = {
                this.setMessage
            }
            displayMessageContent = {
                this.state.displayMessageContent
            }
            />
        }
        is required * /} <
        User firebase = {
            firebase
        }
        setUser = {
            this.setUser
        }
        user = {
            this.state.activeUser
        }
        />

        <
        /div>
    );
}

}

export default App;
