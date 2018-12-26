
$(document).ready(function(){
  $.ajax({
    url: "https://api.aerisapi.com/fires/closest?p=boulder,co&filter=critical&radius=200miles&from=-10months&limit=10&client_id=hCHSioHEcytccBOjaSmxW&client_secret=1BTrDqc4o6YHffILzD4qFOqSzcn91OF28YTjvkUv",
    dataType: "json",
    success: function(json) {
      if (json.success == true) {
        $("#nameDiv").append(json.response.place.name);
        $("#locationDiv").append(json.response.report.location);
        $("#acresDiv").append(json.response.report.areaAC + 'AC');
        $("#percentDiv").append(json.response.report.perContained+"in");
      } else {
        console.log('An error occurred: ' + json.error.description);
      }
    }
  });
});
