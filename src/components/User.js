
import React, { Component } from 'react';
import * as firebase from 'firebase';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            users: [],
            showName: '',
        };
        this.userRef = this.props.firebase.database().ref('users');
        this.handleThisChange = this.handleThisChange.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.googleSignOut = this.googleSignout.bind(this);


    }
    // *****Function Section********************************
    componentDidMount(user) {
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
        });
    }

    googleSignIn(){

        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup(provider).then((result) => {
            //const user = result.user;
            const user = firebase.auth().currentUser
            this.props.setUser(user, user.displayName);
        });
    }

     googleSignout() {
         firebase.auth().signOut();
    }


    handleThisChange(event) {
        this.setState({value: event.target.value});
        console.log("event handled")
    }


    render() {
        return (

            <section className="userlogs">
                <button onClick ={this.googleSignIn} >Sign In</button>
                <p>Current User: {this.props.displayUserName}</p>
                <button onClick ={this.googleSignout} >Sign Out</button>
            </section>

        );
    }
}
export default User;

// UserList.js
// Handles Sign In, Display and Sign Out of User
//

