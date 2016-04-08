$(document).ready(function() {

	var firstName = "";

	var middleName = "";

	var lastName = "";

	$("#last-button").on("click", function(e) {
		e.preventDefault();
		firstName = $("#first_name").val();
		console.log(firstName);
		$("#first-display").text(firstName);
		middleName = $("#middle_name").val();
		console.log(middleName);
		$("#middle-display").text(middleName);
		lastName = $("#last_name").val();
		console.log(lastName);
		$("#last-display").text(lastName);
	})
})