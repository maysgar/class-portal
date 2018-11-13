$( document ).ready(function() {
  $('select').select();
});

//var firebase = new Firebase("<Your Firebase URL here>");

  // Get a reference to the database service
  var database = firebase.database();

  // Create a storage reference from our storage service
  var storageRef = database.ref("roadtriponline-c5060");

  //create instance of the Google provider instance
  var provider = new firebase.auth.GoogleAuthProvider();

  //user status div
  var user_info = document.getElementById("user_status");

  //current user
  var current_user = null;


  // var map;
  // function initMap() {
  //   // The location of Uluru
  //   var uluru = {lat: 40.015482, lng: -105.271227};
  //   // The map, centered at Uluru
  //   var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
  //   // The marker, positioned at Uluru
  //   var marker = new google.maps.Marker({position: uluru, map: map});

  //   // The map, centered at Uluru
  //   var map2 = new google.maps.Map(document.getElementById('map2'), {zoom: 4, center: uluru});
    
  //   // The map, centered at Uluru
  //   var map3 = new google.maps.Map(document.getElementById('map3'), {zoom: 4, center: uluru});

  //   // The map, centered at Uluru
  //   var map4 = new google.maps.Map(document.getElementById('map4'), {zoom: 4, center: uluru});

  //   // The map, centered at Uluru
  //   var map5 = new google.maps.Map(document.getElementById('map5'), {zoom: 4, center: uluru});
  // }


  function initMap() {
    // Map 1: Denver to Detroit
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: 40, lng: -100},
      mapTypeId: 'terrain'
    });

    // Map 2: Miami to Detroit
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 3,
      center: {lat: 40, lng: -100},
      mapTypeId: 'terrain'
    });

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var directionsService2 = new google.maps.DirectionsService;
    var directionsDisplay2 = new google.maps.DirectionsRenderer;

    // Map 3: Grand Rapids to Detroit
    var map3 = new google.maps.Map(document.getElementById('map3'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map3);

    // Map 4: Toronto to Niagara Falls
    var map4 = new google.maps.Map(document.getElementById('map4'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay2.setMap(map4);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    // Calculate route from Grand Rapids to Detroit
    calculateAndDisplayRoute(directionsService, directionsDisplay);

    // Calculate route from Toronto to Niagara Falls
    calculateAndDisplayRoute2(directionsService2, directionsDisplay2);

    // Map 5: Map of downtown area in Toronto
    var map5 = new google.maps.Map(document.getElementById('map5'), {
      zoom: 12,
      center: {lat: 43.652695, lng: -79.383495},
      mapTypeId: 'terrain'
    });

    // Add the circle for this city to the map.
	  var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map5,
      center: {lat: 43.652695, lng: -79.383495},
      radius: Math.sqrt(200) * 100
      });


    var flightPlanCoordinates = [
      {lat: 40.015482, lng: -105.271227},
      {lat: 42.330788, lng: -83.054331}
    ];

    var flightPlanCoordinates2 = [
      {lat: 25.761870, lng: -80.189202},
      {lat: 42.330788, lng: -83.054331}
    ];

    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    var flightPath2 = new google.maps.Polyline({
      path: flightPlanCoordinates2,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);
    flightPath2.setMap(map2);
  }


  // Calculate driving route from Grand Rapids to Detroit
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: "grand rapids, mi",
      destination: "detroit, mi",
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  // Calculate driving route from Toronto to Niagara Falls
  function calculateAndDisplayRoute2(directionsService, directionsDisplay) {
    directionsService.route({
      origin: "toronto, on",
      destination: "niagara falls, on",
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


function authenticate(){
  //firebase.auth().signInWithPopup(provider).then(function(result) {
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
      }
      else {
        //google sign-in redirect
        firebase.auth().signInWithRedirect(provider);
      }
      // The signed-in user info
      current_user = result.user;
      user_info.innerHTML = "Hi, " + current_user.displayName;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
}

function signOut(){
	firebase.auth().signOut().then(function() {
		// Sign-out successful
		user_info.innerHTML = "";
	}).catch(function(error) {
		// An error happened
	});
}

//setting an event listener for change of authentication state
firebase.auth().onAuthStateChanged(function(user) {
	current_user=user;
	if (user) {
    	// User is signed in
		user_info.innerHTML = "Hi, " + user.displayName;
  	} else {
    	// No user is signed in
		user_info.innerHTML = "";
  	}
});


  
  function addPlan() {
    var person = document.getElementById("form-person").value;
    var city = document.getElementById("form-city").value;
    var type = document.getElementById("form-type").value;
    var desc = document.getElementById("form-desc").value;


    //write to firebase
    storageRef.push({person: person, city: city, type: type, desc: desc});

    // var name = $('#name').val();
    // var acojonadanew = $('#acojonada').val();
    // var author = $('#author').val();
    // var newAcojonadaKey = firebase.database().ref().child(name).push().key;
    // var flag = 0;
  
    // firebase.database().ref().once('value').then(snapshot => {
    //   snapshot.forEach(childSnapshot => {
    //     if(childSnapshot.val().user === name && childSnapshot.val().acojonada === acojonadanew) {
    //       alert("Acojonada already in database");
    //       flag = 1;
    //     }
    //   });
    // });
  
    // if (flag === 0) {
    //   var updates = {};
    //   updates['/' + newAcojonadaKey + '/user'] = name;
    //   updates['/' + newAcojonadaKey + '/acojonada'] = acojonadanew;
    //   updates['/' + newAcojonadaKey + '/author'] = author;
  
  
    //   firebase.database().ref().update(updates);
  
    //   alert("Acojonada " + acojonadanew + " by " + name + " added. MUY BIEN")
    //   //$('#name').text("");
    //   $('#acojonada').text("");
    //   $('#autor').text("");
    // }
  
  }


////////////////////////////////////////////////////////////////////////////////////////////////////

// function renderList() {
//   firebase.database().ref().once('value').then(snapshot => {
//     snapshot.forEach(childSnapshot => {
//       document.getElementById('db-list').innerHTML += '<p>' + childSnapshot.val().user + ': ' + childSnapshot.val().acojonada + '    (' + childSnapshot.val().author +')</p>'
//     });
//   });
// }

function displayDb(){
  var db_list = document.getElementById("db-list");
  // Adds an event listener to any child added to our database
  // This is triggered when the listener is first attached and every time a new child is added
  // Adds the orders to the orders div
	storageRef.on("child_added", function(snapshot){
    var person=snapshot.val().person;
    var city=snapshot.val().city;
    var type=snapshot.val().type;
    var desc=snapshot.val().desc;
    db_list.innerHTML +=
                  "<tr>" + 
                    "<td>" + city + "</td>" +
                    "<td>" + type + "</td>" +
                    "<td>" + person + "</td>" +
                    "<td>" + desc + "</td>" +
                  "</tr>";
    });
  }

  function join(){
    alert("Request sent to join the trip!");
  }

  /* Button for the user to go back to the top of the webpage
*  When the user scrolls down 20px from the top of the document, show the button
*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


// Add a plan to the firebase database
document.getElementById("send-ideas").addEventListener("click", addPlan);
// Sign in to the page by google account via Firebase
document.getElementById("signin").addEventListener("click", authenticate);
// Sign out of the page via Firebase
document.getElementById("signout").addEventListener("click", signOut);
// Send an alert to the user when requesting to join the trip
document.getElementById("joinus").addEventListener("click", join);
// When the user clicks on the button, scroll to the top of the document
document.getElementById("myBtn").addEventListener("click", function(){
  $('html, body').animate({ scrollTop: 0 }, 600);
})

// Arrow for the first slide
$('#scroll_mat').on('click', function() {
  $('html, body').animate({ scrollTop: 750 }, 600);
})

// Add suggestions button
$('#button-sug').on('click', function() {
  $('html, body').animate({ scrollTop: 2640 }, 600);
})

// Posted plans button
$('#button-posted').on('click', function() {
  $('html, body').animate({ scrollTop: 3480 }, 600);
})



