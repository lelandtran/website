

var blurb_elem = document.getElementById("blurb");

function changeText(elmt, txt) {
	elmt.innerHTML=txt;
}

function changeBlurb(txt) {
	document.getElementById("blurb").innerHTML=txt;
}

$(document).ready(function() {

	// default HTML for blurb div
	var blurb_div = document.getElementById("blurb");
	blurb_div.innerHTML=about_ht;

	$("#about").click(function() {
		$("#blurb").html(about_ht);
	});

	$("#resources").click(function() {
		$("#blurb").html(resources_ht);
	});

	// does not work
	$("#smash").click(function(event){
		event.preventDefault();
		$("#blurbs").text(smash_ht);
	});


	$("#mindmap area").click( function () {
        $(this).attr('id'); // the id of the area clicked
    });
});