$(document).ready(function() {
	$('pre code').each(function(i, e) {
		hljs.highlightBlock(e);
	});
});


// Javascript using jQuery
var thispage = document.location.href;
$.getJSON('http://spokeapp.com/data/API-SECRET?referrer='+thispage, function(data) {
  $.each(data, function(key, val) {
    //do stuff
  });
});