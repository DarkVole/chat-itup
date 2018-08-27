// UserList.js
// Allows you to create and manage Users
// Allows you to select a room and display its messages
//
import React, { Component } from 'react';
class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            users: [],
        };
        this.userRef = this.props.firebase.database().ref('user');
    }
    // *****Function Section********************************


    handleLogIn(event) {  // tie this to below somehow
        alert('Login attempted')
       // var provider = new firebase.auth.GoogleAuthProvider();


    }

    handleLogOut(event) {
     //   this.props.firebase.auth().signOut();
        alert("Logout attempted");
    }

    render() {
        return (
            <section className="userlogs">
            <button onClick ={this.handleLogIn} >Sign In</button>

            <p>Hello World</p>
            <button onClick ={this.handleLogOut} >Sign Out</button>

            </section>

        );
    }

}
export default User;

