//        componentDidMount() {
//             const mess = snapshot.val();
//             mess.key = snapshot.key;
//
//             this.setState(value: '')};

//            <ul>
//             {this.state.messagess.map((mess, index) =>
//             <li
//
//
//             {this.state.rooms.map(function(val,index){
//                 return <li key={index}>{val.rooms}</li> })}
//             key = {index}> {mess.content}></li>
//         )}</ul>                 </ div >


import React, { Component } from 'react';

    class MessageList extends Component {

        constructor(props) {
            super(props);
            this.state = {
                value: '',
                val:'',
                rooms: [],
                activeRoom: '',
                //setActiveRoom: '',
                roomKey: ''

            };
            this.messagesRef = this.props.firebase.database().ref('messages');
        }



        render() {
            return (
                < section
                    className="messagelist">

                    <ul>
                        {this.state.messages.map(function (val, index) {
                            return
                            <li key={index}> {val.roomid}</li>
                        })}
                    </ul>
                </section>
            );
        }
    }

 export default MessageList;
