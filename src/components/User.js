
import React, { Component } from 'react';
import * as firebase from 'firebase';

class User extends Component {

    constructor(props) {
        super(props);




    }

    componentDidMount(user) {
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
        });
    }

    googleSignIn=()=>{

        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }

     googleSignOut=()=>{

          this.props.firebase.auth().signOut();

    }




    render() {

        return (

            <section className="userlogs">

                <button onClick ={this.googleSignIn} >Sign In</button>
                <button onClick ={this.googleSignOut} >Sign Out</button>

                 <div>{ this.props.user ? this.props.user.displayName : 'Guest' }</div>

            </section>

        );
    }
}
export default User;

