//vars
var database = firebase.database();
var databaseRef = database.ref();

//functions
$(document).ready(function(){
  $("#order_form").submit(function(e){
      postForm();
      e.preventDefault();
  });

  loadFirebaseData();
});


function postForm(){
  var inputName = $("#name").val()? $("#name").val() : "-";
  var inputEmail = $("#email").val()? $("#email").val() : "-";
  var inputPhone = $("#phone").val()?  $("#phone").val() : "-";
  var isPeople = $('input[name=people]:checked').val();
  var isStructures = $('input[name=structures]:checked').val();
  var inputLocation = $("#location").val()? $("#location").val() : "-";
  var inputDesc = $("#description").val()? $("#description").val() : "-";
  console.log("All done");

  databaseRef.push({
    name: inputName,
    email: inputEmail,
    phone: inputPhone,
    people: isPeople,
    structures:isStructures,
    location:inputLocation,
    desc:inputDesc
  }).then(function(){
    console.log("Data saved to firebase");
  }).catch(function(error) {
    alert("Data could not be write to firebase." + error);
  });
}

function loadFirebaseData(){
  databaseRef.on("child_added", function(snapshot){
    console.log(snapshot.val());
    var loadName = $("<p></p>").text(snapshot.val().name);
    var loadLocation =  $("<p></p>").text(snapshot.val().location);
    var loadIsPeople = $("<p></p>").text(snapshot.val().people);
    var loadIsStructures = $("<p></p>").text(snapshot.val().structures);
    var loadDesc = $("<p></p>").text(snapshot.val().desc);

    $("#result_name").append(loadName);
    $("#result_location").append(loadLocation);
    $("#result_people").append(loadIsPeople);
    $("#result_structures").append(loadIsStructures);
    $("#result_desc").append(loadDesc);
  });
}
