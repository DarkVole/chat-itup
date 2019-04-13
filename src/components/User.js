import React, {
    Component
} from 'react';
import * as firebase from 'firebase';
import {
    Button
} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.userRef = this.props.firebase.database().ref('users');
        this.googleSignIn = this.googleSignIn.bind(this);
        this.googleSignOut = this.googleSignout.bind(this);


    }
    // *****Function Section********************************
    componentDidMount(user) {
        this.props.firebase.auth().onAuthStateChanged(user => {
            this.props.setUser(user);
        });
    }

    googleSignIn() {

        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup(provider);
    }

    googleSignout() {
        firebase.auth().signOut();
    }


    render() {
        return (

            <
            section className = "userlogs" >
            <div class = "p-3">
             <Button onClick = {
                this.googleSignIn
            } px-md-5 color="primary">Sign In</Button>{this.googleSignIn}
             <
            p className = "text-info pt-3 px-3"> Current User: {
                this.props.user ? this.props.user.displayName : 'Guest'
            } < /p> 
            
            <Button onClick = {
                this.googleSignout
            }color="warning"> Sign Out </Button>{this.googleSignout}
            
</div>
            <
            /section>

        );
    }
}
export default User;
