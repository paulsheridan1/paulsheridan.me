var navHome = function() {
    document.getElementById("nav-home").className = "active";
    document.getElementById('nav-about').className = "";
    document.getElementById('nav-contact').className = "";
}

var navAbout = function() {
    document.getElementById('nav-home').className = "";
    document.getElementById('nav-about').className = "active";
    document.getElementById('nav-contact').className = "";
}

var navContact = function() {
    document.getElementById("nav-home").className = "";
    document.getElementById("nav-about").className = "";
    document.getElementById("nav-contact").className = "active";
}

$(document).ready(function(){

   $("div").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');
   });

});