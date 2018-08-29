// UserList.js
// Allows you to create and manage Users
// Allows you to select a room and display its messages
//
import React, { Component } from 'react';
import * as firebase from 'firebase';
var provider = new firebase.auth.GoogleAuthProvider();
class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            users: [],
        };
        this.userRef = this.props.firebase.database().ref('users');
        this.handleThisChange = this.handleThisChange.bind(this);
        this.googleSignin = this.googleSignin.bind(this);
        this.googleSignOut = this.googleSignout.bind(this);
        this.createUser = this.createUser.bind(this);

    }
    // *****Function Section********************************

    handleThisChange(event) {
        this.setState({value: event.target.value});
        console.log("event handled")
    }

     googleSignin() {
        firebase.auth()

            .signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(token)
            console.log(user)
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)
        });
    }

     googleSignout() {
         firebase.auth().signOut();
         alert('User Signed Out');

    }
    createUser(event) {
        //userRef is the firebase ref from above. We are pushing the value variable
        // that has been declasred as a prop and was attached to the input box.

       this.userRef.push({userName: this.state.value});
        alert('A user has been added: ' + this.state.value); // delete when working
        event.preventDefault(); //Prevents the event from cause an error
    console.log(this.state.value)}

  //  componentDidMount() {
 //       this.props.firebase.auth().onAuthStateChanged( user => {
 //           this.props.setUser(user);
    componentDidMount() {
        this.userRef.on('child_added', snapshot => {
            const user = snapshot.val();
            user.key = snapshot.key;
            this.setState({ users: this.state.users.concat( user ) })
            this.setState({ value: '' });
        });
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
        });
    }

    render() {
        return (

            <section className="userlogs">
                <button onClick ={this.googleSignin} >Sign In</button>

                    <form onSubmit={this.createUser} ><label>User Name:
                        <input type="text" value={this.state.value} onChange={this.handleThisChange} />
                    </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <ul>{/*The beloved .map function -- use THIS format*/}
        {
        this.state.users.map((val,index)=>{

            return <li onClick={()=>this.props.setUser(val.key,val.userName)} key={index}>{val.userName}</li> })
        }


                    </ul>

<p>Current User: {this.props.displayUserName}</p>
                <button onClick ={this.googleSignout} >Sign Out</button>
            </section>

        );
    }
}
export default User;

