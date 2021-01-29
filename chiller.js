function addUser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

     window.location = "chiller_room.html";
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebaseConfig.databaseURL().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name)

    window.local = "chiller_page.html";
}