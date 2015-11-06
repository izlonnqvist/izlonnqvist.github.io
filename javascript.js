$(document).ready(function (){
var url = window.location.href;

// Will also work for relative and absolute hrefs
$('.site-nav a').filter(function() {
    return this.href == url;
    }).addClass('active');
});