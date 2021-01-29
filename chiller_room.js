 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCrYNoM3dul8wqOSEz0MH0R9RcRE8zY500",
      authDomain: "class-test-13b0c.firebaseapp.com",
      databaseURL: "https://class-test-13b0c-default-rtdb.firebaseio.com",
      projectId: "class-test-13b0c",
      storageBucket: "class-test-13b0c.appspot.com",
      messagingSenderId: "439589508220",
      appId: "1:439589508220:web:9909a404bafb60df20e5f9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName (name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "chiller_Page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location.replace("index.html");
}

