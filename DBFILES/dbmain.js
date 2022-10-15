var Email;
var Password;
var Profile;
var UserRef;
var Messages;
const User;
var Message;
var Div;
var Div2;
var Message2;
var ChatMessage;
function getCookie(cname) {
 let name = cname + "=";
 let decodedCookie = decodeURIComponent(document.cookie);
 let  ca = decodedCookie.split(';');
 for(let i = 0; i <ca.length; i++) {
   let c = ca[i];
   while (c.charAt(0) == ' ') {
     c = c.substring(1);
   }
   if (c.indexOf(name) == 0) {
     return c.substring(name.length, c.length);
   }
 }
 return "";
}
 
     const firebaseConfig = {
 apiKey: "AIzaSyDhM89XoRnSPkKheXZen7bd4J8A8vslyXM",
 authDomain: "peeryeardb.firebaseapp.com",
 databaseURL: "https://peeryeardb-default-rtdb.firebaseio.com",
 projectId: "peeryeardb",
 storageBucket: "peeryeardb.appspot.com",
 messagingSenderId: "325976647918",
 appId: "1:325976647918:web:fd40d08bf9747bcc1f2bff"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
 
 
firebase.auth().onAuthStateChanged((user) => {
 if (user) {
   // User is signed in, see docs for a list of available properties
   // https://firebase.google.com/docs/reference/js/firebase.User
   var uid = user.uid;
   // ...
 } else {
   // User is signed out
   // ...
 }
});
 
 
 
 
function Login() {
 Password = document.getElementById("password").value;
 Email = document.getElementById("Email").value;
  firebase.auth().signInWithEmailAndPassword(Email, Password)
 .then((userCredential) => {
   User = firebase.auth().currentUser;
   if (User !== null) {
     // The user object has basic properties such as display name, email, etc.
     const email = User.Email;
     const Uid = User.uid;
     const photoURL = User.photoUrl;
       document.cookie = "Email="+Email;
       document.cookie = "friends=null";
       document.cookie= "uid="+User.uid;
       window.location.replace("https://peeryear.w3spaces.com/WEBFILES/home.html");
 
 
   // ...
 }
 })
 .catch((error) => {
   var errorCode = error.code;
   var errorMessage = error.message;
 });
 
 
 
 
 
 
 
}
var auth = firebase.auth();
 
function SignUp() {
 Password = document.getElementById("password").value;
 Email = document.getElementById("Email").value;
 UserRef = firebase.database().ref('users');
 firebase.auth().createUserWithEmailAndPassword(Email, Password)
   .then((userCredential) => {
    // Signed in
     const user = userCredential.user;
     const dt = new Date();
     firebase.database().ref("users/" + user.uid).set({
         SignupTime: dt,
         uid: user.uid,
         email: Email,
         photoUrl: ""
     })
 
       document.cookie = "Email="+Email;
       document.cookie = "friends=null";
       document.cookie= "uid="+user.uid;
       window.location.replace("https://peeryear.w3spaces.com/WEBFILES/home.html");
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
 
     alert(errorMessage);
   })
 
}
 function CreateBox(msg) {
   List = document.createElement("li");
  List.classList.add("self");
  Div = document.createElement("div");
  List.appendChild(Div);
  Message2 = document.createElement("p");
  Message2.innerHTML = msg;
  Div.appendChild(Message2);
 
 
 
 }
 
function LoadUserStats() {
   Profile = document.getElementById("ProfileText");
   if (getCookie("uid") !== "") {
   Profile.innerHTML = "";
   }
   else {
     Profile.innerHTML = "NULL";
   }
 
}
function LoadChatStats() {
  /* Structure:
 
  +Chats
  --- Number
  -------Message
 
  */
  for (var i =0;i>3000;i++) {
  UserRef = firebase.database().ref('Messages/'+i);
  Message = UserRef.message
  CreateBox(Message);
 
  }
 
 
}
 
function CheckDetails() {
 if (getCookie("uid") !== "") {
     LoadUserStats();
     LoadChatStats();
     console.log("User is signed in");
 
 
 }
 else {
   console.log("User is signed out");
   window.location.replace("login.html");
 
 }
 
 
}
 
function TestConnection() {
 alert("working");
 
 
}
 
function UploadChat(msg2) {
  UserRef = firebase.database().ref('Messages/');
 
 
 
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/*
 
var Name;
var CookieId;
var Friends;
 
 
 
 
let Logged;
function getCookie(cname) {
 let name = cname + "=";
 let decodedCookie = decodeURIComponent(document.cookie);
 let ca = decodedCookie.split(';');
 for(let i = 0; i <ca.length; i++) {
   let c = ca[i];
   while (c.charAt(0) == ' ') {
     c = c.substring(1);
   }
   if (c.indexOf(name) == 0) {
     return c.substring(name.length, c.length);
   }
 }
 return "";
}
 
function SignUpDone() {
 
   var Email = document.getElementById("Email").value;
   var Password = document.getElementById("password").value;
 
firebase.auth().createUserWithEmailAndPassword( Email, Password)
 .then((userCredential) => {
   // Signed in
   const user = userCredential.user;
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
 });
 
 document.cookie = "name="+Name;
 document.cookie = "friends=null";
 document.cookie= "uid="+"";
 window.location.replace("https://peeryear.w3spaces.com/WEBFILES/home.html");
 }
 
 
 
 
function PostDetails() {
 
  if (getCookie("uid") !== "") {
 
   Profile.innerHTML = getCookie("name");
 
 }
  else{
 
 
 }
}
function GetLogs() {
var UidBeta =  "/"
var Uid = "/"
ref = firebase.database().ref(UidBeta);
 
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  Name = snapshot.Name;
  CookieId = snapshot.id;
  Friends = snapshot.friends;
}, function (error) {
  console.log("Error: " + error.code);
});
 
 document.cookie = "name="+Name;
 document.cookie = "friends="+Friends;
 document.cookie= "uid="+ CookieId;
 
}
var ref;
 
GetLogs();
 
*/
 
 

