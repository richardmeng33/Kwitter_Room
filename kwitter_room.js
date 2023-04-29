
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAIzPqEcluOKKjpBsmetIp0CfvHfXTfgk0",
      authDomain: "tweetrooms.firebaseapp.com",
      databaseURL: "https://tweetrooms-default-rtdb.firebaseio.com",
      projectId: "tweetrooms",
      storageBucket: "tweetrooms.appspot.com",
      messagingSenderId: "322902800978",
      appId: "1:322902800978:web:a6583935c04bca38d57d8b"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user") 
document.getElementById("welcome").innerHTML = "Welcome " + username + "!"   

function newroom(){
      rname = document.getElementById("room").value
      localStorage.setItem("room_name",rname)

      firebase.database().ref("/").child(rname).update({
            purpose:"adyroom"
      })

}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("outputdiv").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      newrow = "<div class='room_name' id=" + Room_names +  " onclick='redirecttoroom(this.id)'>" + Room_names + "</div> <hr>"
      document.getElementById("outputdiv").innerHTML += newrow
      //End code
      });});}
getData();

function redirecttoroom(name) {
      localStorage.setItem("room_name",name)
      window.location = "kwitter_chat.html"


}
function logout() {
      localStorage.removeitem("user")
      localStorage.removeitem("room_name")
      window.location = "index.html"
}
