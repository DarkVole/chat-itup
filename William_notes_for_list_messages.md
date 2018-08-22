PART 1.

We are going to change App.js so that a property named activeRoom is in the constructor. We are then going
to add a method named setRoom that will be passed in as a prop to RoomList.

In RoomList when a user clicks a "room" the setRoom method will be triggered and passed in the room "key". setRoom will then store this information on the activeRoom property.


PART 2.














NOTE:

You had map methods that used map(function(){}) when you need an arrow function
to bind the "this" keyword

map(()=>{
	
})


________________

You had code that did not pass an object to this.setState()

____________________________________________