$(document).ready(function() { // do this when the document is loaded
	$("#dialpad").show(); // show the element with ID "dialpad"
	$("#contacts").hide(); // hide the element with ID "contacts"
	$("#addcontact").hide(); // hide the element with ID "addcontact"
	$("#help").hide();
});

function switch2dialer(){
	$("#dialpad").show(); // show the element with ID "dialpad"
	$("#contacts").hide(); // hide the element with ID "contacts"
	$("#addcontact").hide(); // hide the element with ID "addcontact"
	$("#help").hide();
}
$("#dialerButton").click(switch2dialer)

function switch2phonebook(){
	$("#dialpad").hide(); // hide the element with ID "dialpad"
	$("#contacts").show(); // show the element with ID "contacts"
	$("#addcontact").hide(); // hide the element with ID "addcontact"
	$("#help").hide();
}
$("#phonebookButton").click(switch2phonebook);

function switch2addcontact(){
	$("#dialpad").hide(); // hide the element with ID "dialpad"
	$("#contacts").hide(); // hide the element with ID "contacts"
  $("#addcontact").show(); // show the element with ID "addcontact"
	$("#help").hide();
}
$("#addcontactButton").click(switch2addcontact);

function switch2help(){
	$("#dialpad").hide(); // hide the element with ID "dialpad"
	$("#contacts").hide(); // show the element with ID "contacts"
	$("#addcontact").hide(); // hide the element with ID "addcontact"
	$("#help").show();
}
$("#helptab").click(switch2help);

$(".num").click(function(e) {
	console.log(e.target.id)
	// e.target.id
	$("#dialed").val($("#dialed").val()+e.target.id)

});

$("#clear").click(function(){
	$("#dialed").val("")
});

$("#clear1").click(function(){
	$("#name").val("")
	$("#phonenumber").val("")
	$("#email").val("")	
});

// $(document).keypress(function(e){
// 	console.log(e.which)
// });

hotkeys("d", switch2dialer)
hotkeys("p", switch2phonebook)
hotkeys("a", switch2addcontact)
hotkeys("h", switch2help)



