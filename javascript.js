$(document).ready(function (){
    $("#hide").click(function(){
        $("#about").hide();
    });
    $("#show").click(function(){
        $("#about").show();
    }); 
    
var url = window.location.href;

// Will also work for relative and absolute hrefs
$('.site-nav a').filter(function() {
    return this.href == url;
    }).addClass('active');
});
