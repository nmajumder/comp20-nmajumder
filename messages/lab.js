function parse() {
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			msgDiv = document.getElementById("messages");
			parsed = JSON.parse(request.responseText);
			for (i = 0; i < parsed.length; i++) {
				msgDiv.innerHTML += "<p>" + parsed[i]['content'] + "</p>";
			}		
		} else if (request.readyState == 4 && request.status != 200) {
			alert("Error");
		}
	}
	request.send();
}