var counter1 = 0;
var counter2 = 0;
var counter3 = 0;


$(document).ready(function(){
    $("#bike_road").click(function(){
        $("#changing_text").text("The wide-open rolling terrain of the Yampa Valley has long been home to Steamboat's ranching legacy. Pedal our roads and you will be rewarded with miles of great vistas. Popular routes include everything from 20-mile out and backs, to 40-mile circuits, to mixed dirt touring, to epic hill climbs and century rides. Road rides vary in mileage so you’ll have options for a quick cruise, or an all- day crusher.");
        $("#changing_image").attr("src","IMAGES/Steamboat.jpg");
    });

    $("#bike_mountain").click(function(){
        $("#changing_text").text("Crested Butte and the Gunnison Valley offer an expansive mountain-biking experience like no other. The area’s more than 750 miles of mountain-biking trails lead to wildflower-peppered valleys, unparalleled mountain vistas and multi-hued desert expanses.");
        $("#changing_image").attr("src","IMAGES/CrestedButte.jpg");
    });

    $("#bike_cyclocross").click(function(){
        $("#changing_text").text("The Boulder Valmont Bike Park is a 42-acre, natural surface cycling terrain park offering diverse amenities for several riding styles and abilities. The park is free and open daily from dawn to dusk.");
        $("#changing_image").attr("src","IMAGES/Boulder_valmont.jpg");
    });

    /* Dropdown text for safety webpage */
    $("#dropdown_rules").click(function () {
        $("#dropdown_1").slideToggle("slow");
        if (counter1 == 0) {
            $('#icon_dropdown1').text('arrow_drop_up');
            counter1++;
          } else {
            $('#icon_dropdown1').text('arrow_drop_down');
            counter1 = 0;
          }
    });

    $("#dropdown_equipment").click(function () {
        $("#dropdown_2").slideToggle("slow");
        if (counter2 == 0) {
            $('#icon_dropdown2').text('arrow_drop_up');
            counter2++;
          } else {
            $('#icon_dropdown2').text('arrow_drop_down');
            counter2 = 0;
          }
    });

    $("#dropdown_visible").click(function () {
        $("#dropdown_3").slideToggle("slow");
        if (counter3 == 0) {
            $('#icon_dropdown3').text('arrow_drop_up');
            counter3++;
          } else {
            $('#icon_dropdown3').text('arrow_drop_down');
            counter3 = 0;
          }
    });



});


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}
