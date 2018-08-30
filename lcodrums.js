var config={
    apiKey: "AIzaSyCDGL3jnyFPWVG55g4cqkK35Oo8dKShtYk",
    authDomain: "lco-drums-contact-page.firebaseapp.com",
    databaseURL: "https://lco-drums-contact-page.firebaseio.com",
    projectId: "lco-drums-contact-page",
    storageBucket: "lco-drums-contact-page.appspot.com",
    messagingSenderId: "119568370275"
}
firebase.initializeApp(config);
var database = firebase.database();

  $("button").on("click", function (e) {
    e.preventDefault()
    console.log($(this).text());
    var name=$("#name").val().trim()
    console.log(name);
    var email=$("#email").val().trim()
    console.log(email);
    var message=$("#message").val().trim()
    console.log(message);
    database.ref().push({
        name:name,
        email:email,
        message:message,
    })
  });
  database.ref().on("child_added", function (snapshot) {
    console.log(snapshot);
    var Name = snapshot.val().name;
    console.log(Name);
    var Email = snapshot.val().email;
    console.log(Email);
    var Message = snapshot.val().message;
    console.log(Message);
  },
  function(err) {
    console.log(err);
});