// Initialization of animatte on scroll library
AOS.init();

// "Scroll down to check it out!" text will show on the first slide after a second
setTimeout(function(){
    $("#hidden_text").show("slow");
}, 1000);


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

// When the user clicks on the button, scroll to the top of the document
document.getElementById("myBtn").addEventListener("click", function(){
    $('html, body').animate({ scrollTop: 0 }, 600);
})


// Each of the arrow icons will scroll to the next slide when clicked on them

// Arrow for the first slide
$('#arrow_icon, #scroll_mat').on('click', function() {
    $('html, body').animate({ scrollTop: 850 }, 600);
})

// Arrow for the second slide
$('#arrow_icon2').on('click', function() {
    $('html, body').animate({ scrollTop: 1850 }, 600);
})

// Arrow for the third slide
$('#arrow_icon3').on('click', function() {
    $('html, body').animate({ scrollTop: 2550 }, 600);
})

// Animation for more specs when the user clicks on the "+" icon
$(document).ready(function(){
    $("#circle_icon").click(function(){
        $("#hidden_specs").slideDown("slow");
    });
});

// Initialize materialize framework forms
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });