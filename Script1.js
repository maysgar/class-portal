document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  if ($(window).width() < 960) {
    document.getElementsByClassName("page-footer").style.marginLeft = "0% !important";
 }
 else{
  document.getElementsByClassName("page-footer").style.marginLeft = "20% !important";
 }