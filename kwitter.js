function login(){
    username = document.getElementById("userput").value

    localStorage.setItem("user", username)

    window.location="kwitter_room.html"
}
