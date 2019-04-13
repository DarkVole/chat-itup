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
            <div>
             <Button m-x5 color="primary">Sign In</Button>{this.googleSignIn}
            <
            button onClick = {
                this.googleSignIn
            } > Sign In < /button> <
            p > Current User: {
                this.props.user ? this.props.user.displayName : 'Guest'
            } < /p> 
            
            <Button color="danger"> Sign Out </Button>{this.googleSignout}
            <
            button onClick = {
                this.googleSignout
            } > Sign Out < /button>
</div>
            <
            /section>

        );
    }
}
export default User;
