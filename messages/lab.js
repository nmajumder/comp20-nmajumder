function parse() {
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			msgDiv = document.getElementById("messages");
			parsed = JSON.parse(request.responseText);
			for (i = 0; i < parsed.length; i++) {
				msgDiv.innerHTML += "<p>" + parsed[i]['content'] + " " + parsed[i]['username'] + "</p>";
			}		
		}
	}
	request.send();
}