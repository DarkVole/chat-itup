PART 1.

We are going to change App.js so that a property named activeRoom is in the constructor. We are then going
to add a method named setRoom that will be passed in as a prop to RoomList.

In RoomList when a user clicks a "room" the setRoom method will be triggered and passed in the room "key". setRoom will then store this information on the activeRoom property.


If you run the application and click on a room the key for that room will log to the console.



PART 2.

We are now going to create a component named MessageList to display messages that are associated with the room key.

Most of the code in MessageList is setup that is similar to RoomList.

In App.js you will import MessageList and when you invoke MessageList you will pass in the 
activeRoom as a prop. Inside the MessageList component you iterate over messages
and check to see if they have the same roomID as the ActiveRoom.



NOTE: I think your firebase schema might need to be changes a bit as I don't see any current messages
for the rooms I created. Also it appears you have rooms in firebase that are unused. We can chat about this when we meet.












