

var firebaseConfig = {
  apiKey: "AIzaSyBd2LUu10ExWmHkC2V4e6jLWDDQXk9yKaw",
  authDomain: "testproject-d4626.firebaseapp.com",
  databaseURL: "https://testproject-d4626-default-rtdb.firebaseio.com",
  projectId: "testproject-d4626",
  storageBucket: "testproject-d4626.appspot.com",
  messagingSenderId: "400263228619",
  appId: "1:400263228619:web:b48fc092708e6475187f4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code

      });});}

getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  Window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "kwitter.html";
}
  
