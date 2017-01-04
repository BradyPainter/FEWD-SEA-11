/*
I tried to figure out what the error was for 1st line (actual 6th line) 
it said $ is not defind.
*/
$(document).ready(function() {
var city = $('#city-type').val();

$('#submit-btn').click("submit");
  event.preventDefault();

if (city === "New York" || "New York City" || "NYC") {
	$('body').css('.nyc');
	} 
	else if (city === "San Francisco" || "SF" || "Bay Area") {
		$('body').css('.sf');
	}
	else if (city === "Los Angeles" || "LA" || "LAX") {
		$('body').css('.la');
	}
	else if (city === "Austin" || "ATX") {
		$('body').css('.austin');
	}
	else if (city === "Sydney" || "SYD") {
		$('body').css('.sydney');
	}
});	