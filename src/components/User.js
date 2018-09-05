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
            showName: '',
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
            const user = firebase.auth().currentUser
            this.props.setUser(user, user.displayName);
            console.log(user.displayName);
            console.log(user);
            const baseUser=user.displayName;
            console.log(baseUser)
            this.handleName(user.displayName)
        });
    }

     googleSignout() {

         firebase.auth().signOut();
     //    const guestConstant = "Guest";
      //   this.setState(showName: guestConstant);
      //   alert('User Signed Out');
        // this.handleName("   ")
    }

    handleName(userName) {
        console.log(userName);
            this.setState({showName: userName})
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
        <p>Current User2: {this.state.showName}</p>

                <button onClick ={this.googleSignout} >Sign Out</button>
            </section>

        );
    }
}
export default User;

