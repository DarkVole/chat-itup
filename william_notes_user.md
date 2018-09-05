1. First thing I did was delete all comments from User.js 

2. I formatted all  JSX code so that I can read it

3. I deleted most JSX including the form field from User.js. This is not part of the assignment and I am not sure why it is here. I kept the sign in button. the sign out button and a single element that is used to display name of the logged in user.

4. I removed this.state from your User.js file (it is not needed , the user is stored in App.js )

5. I remove all your properties in the constructor of User.js as they are not needed. You COULD bind your sign in and sign out method there but instead I used arrow methods.

6. I deleted all methods of User.js except those that are needed. The methods that are needed are the googleSignIn and googleSignOut methods.

7. I deleted all content of the googleSignIn method except the code provided in the checkpoint instructions.



If you sign in the user name is captured, the next step is to take the username and store in App.js


8. I went to App.js to insure you had a method to set the user name. You do and it contains uneeded code. I deleted all the uneeded code and rewrote it as needed.

9. You App.js this.state property had two keys of the same name "activeUser", I deleted one of them. You also had a property named "displayUser" - I deleted that as well. You aslo had an array named "users" and I deleted it.

10. I formatted the remaining code in App.js so I can read it. I also deleted comments.

11. I placed a single console.log in app.js  console.log(this.state.activeUser.displayName).
It is used to see the logged-in user.


12. On line 58 in App.js in the User component, I am assigning this.state.activeUser to the prop "user"

13 In User.js , on line 45 the user name is rendered. If no user is logged in then "Guest" is rendered instead.





