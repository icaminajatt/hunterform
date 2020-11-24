function validateName() { //test input for 2-15 allowed characters
	var fName = document.getElementById("Name").value;
	var re1 = /^[a-zA-Z\s\'\-]{2,50}$/;
	
	if (re1.test(fName)) { //if input is valid, update page to show successful entry
		document.getElementById("NamePrompt").style.color = "green";
		document.getElementById("NamePrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	
	else { //if input is invalid, update page to prompt for new input
		document.getElementById("NamePrompt").style.color = "Red";
		document.getElementById("NamePrompt").innerHTML = "<strong>Enter 2-15 characters.</strong>";
		return false;
	}
}

function validateNum() { //test xxx-xxx-xxx
	var phoneNumber = document.getElementById("num").value;
	var re3 = /^\d{3}-\d{3}-\d{3}$/;
	
	if (re3.test(phoneNumber)) { //if input is valid
		document.getElementById("numPrompt").style.color = "green";
		document.getElementById("numPrompt").innerHTML = "<strong>valid</strong>";
		return (true);
	}
	
	else { //if input is invalid
		document.getElementById("numPrompt").style.color = "Red";
		document.getElementById("numPrompt").innerHTML = "<strong>Use xxx-xxx-xxx format.</strong>";
		return (false);
	}
}

function HunterInfo() {
	
	var Name = document.getElementById("Name").value;
	var address = document.getElementById("address").value;
	var birthday = document.getElementById("bday").value;
	var idnum = document.getElementById("num").value;
	var rank = document.getElementById("rank").value;
	
	
	document.getElementById("infoConfirm").innerHTML = "<h2>THANKS FOR PARTICIPATING!</h2>";
	document.getElementById("infoConfirm").innerHTML += "<h3> Hunter, " + Name.toUpperCase() + "!" + "</br>" + rank + "</h3>";
	document.getElementById("infoConfirm").innerHTML += "<h5>By sending a 9-digit code to a phone company owned by the Hunter Association, a Hunter can send and receive messages via Q, a software that leaves no logs or call history and that cannot be detected by regular wiretapping systems.</h5>";
	document.getElementById("infoConfirm").innerHTML += "<h6>" + "For more inquiries, visit the " + "<a href='https://hunterxhunter.fandom.com/wiki/Hunter_Association'>Hunter Website.</a>" + "</h6>";
}