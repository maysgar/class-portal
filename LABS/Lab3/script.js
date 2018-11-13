
/**
 * NEW CONTENT:
 * 	- Jquery animation for the title and the "Champions League" image when the page is loaded
 * 	- Change page to dark mode now done with Jquery
 * 	- Toggle slide in/out "next game" panel with Jquery
 * 	- Stop the counter when the "Stop counter" button is clicked, now done with Jquery
 */




/* Window on load is introduced so "eventListeners" work */
 window.onload = function() {

	document.getElementById("button_tickets").addEventListener("click", ticketFunction);
    document.getElementById("real_madrid").addEventListener("mouseover", realMadridFunction);
    document.getElementById("real_madrid").removeEventListener("mousemover", realMadridFunction);

 // 2) JQUERY Animation for "Champions League Final Countdown" title on load webpage
		var div = $("#intro");
		div.animate({fontSize: '400%'}, "slow");
		div.css("font-family", "Impact, Charcoal, sans-serif");

		var imageChampions = $("#center");
		imageChampions.animate({width: '20%'}, 1250);
    };

var countDownDate;
var x;



/* When button is clicked, redirects to ticket buying page */
function ticketFunction() {
    window.location = "https://www.ticketmaster.com/";
}

/* Generates an image when mousing over the button */
function realMadridFunction(){
    var img = document.createElement("img");
    img.src = "IMAGES/real_madrid_logo.png";
    var src = document.getElementById("imagePop");
    src.appendChild(img);
}

/* Counter starts when the function is called, after clicking the button */
function startCounter(){
// Set the date we're counting down to
countDownDate = new Date("Jun 1, 2019 01:00:00").getTime();

// Update the count down every 1 second
x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="count"
    document.getElementById("count").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the count down is over, we replace the numbers by some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "FINAL ALREADY ENDED (REAL MADRID PROBABLY WON)";
    }
}, 1000);
}

// 1) JQUERY: Toggle Dark mode
$(document).ready(function(){
    $("#darkMode").click(function(){
		var intro = $("#intro");
		var count = $("#count");
		$("body").css("background-color", "#111")
		intro.css("color", "white");
		count.css("color", "white");
        //$("h1, h2, p").addClass("blue");
        //$("div").addClass("important");
    });
});


//3) JQUERY: Toggle slide-in/slide-out next champions league matches:
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


/* JQUERY: Stops the counter when the button is clicked */
$(document).ready(function(){
	$("#stopCounter").click(function(){
		clearInterval(x);
		$("#count").text("STOPPED TIMER");
    });
});