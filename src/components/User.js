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
        this.googleSignin = this.googleSignin.bind(this);
        this.googleSignOut = this.googleSignout.bind(this);

    }
    // *****Function Section********************************

    handleChange(event) {
        this.setState({value: event.target.value});
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

    //}
    //componentDidMount() {
  //      this.props.firebase.auth().onAuthStateChanged( user => {
 //           this.props.setUser(user);
      //       this.userRef.on('child_added', snapshot => {
        //         const room = snapshot.val();
          //       user.key = snapshot.key;
            //     this.setState({ users: this.state.users.concat( UserName ) })
              //   this.setState({ value: '' });
            // });
//        });
    }

    render() {
        return (
            <section className="userlogs">
                <button onClick ={this.googleSignin} >Sign In</button>


                    <form onSubmit={this.createUser} ><label>User Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <ul>{/*The beloved .map function -- use THIS format*/}



                    </ul>
                    <h4> Current User: {/*this.props.activeUser.name*/} </h4>

                <button onClick ={this.googleSignout} >Sign Out</button>
            </section>
        );
    }

}
export default User;

