// UserList.js
// Allows you to create and manage Users
// Allows you to select a room and display its messages
//
import React, { Component } from 'react';
import * as firebase from 'firebase';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            users: [],
            baseUser:''
        };
        this.userRef = this.props.firebase.database().ref('users');
        this.handleThisChange = this.handleThisChange.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.googleSignOut = this.googleSignout.bind(this);
        this.createUser = this.createUser.bind(this);

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
            this.props.setUser(" ", user);
            const user = firebase.auth().currentUser
            console.log(user.displayName);
            console.log(user);

        });
    }

     googleSignout() {
         firebase.auth().signOut();
         alert('User Signed Out');

    }

    handleThisChange(event) {
        this.setState({value: event.target.value});
        console.log("event handled")
    }
    createUser(event) {
        //userRef is the firebase ref from above. We are pushing the value variable
        // that has been declasred as a prop and was attached to the input box.

       //this.userRef.push({userName: this.state.value});
       // alert('A user has been added: ' + this.state.value); // delete when working
        //event.preventDefault(); //Prevents the event from cause an error
    console.log(this.state.value)}





  //      this.userRef.on('child_added', snapshot => {
   //         const user = snapshot.val();
     //       user.key = snapshot.key;
      //      this.setState({users: this.state.users.concat(user)})
      //      this.setState({value: ''});
       // });



    render() {
        return (

            <section className="userlogs">
            <h4> Username: {this.props.user ? this.props.user.displayName : 'Guest'}</h4>
                <button onClick ={this.googleSignIn} >Sign In</button>

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

