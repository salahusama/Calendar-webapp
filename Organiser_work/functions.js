function getName() {
	var name = getCookie("name");
	document.getElementById("hello").innerHTML = name;
}
function getCookie(cookieToFind) {
	// Split the cookie string as before
	var individualCookies = document.cookie.split(';');

	for (var i = 0; i < individualCookies.length; i++) {
	// Loop through all cookies and split them on the equals sign
		var oneCookie = individualCookies[i].split("=");

		// Get the name of the cookie
		var name =  oneCookie[0];

		// This is standard code for removing excess white space
		name = name.replace(/^\s+|\s+$/g, '') ;

		// Get the value of the cookie
		var value = oneCookie[1];

		// If the name is the one you want, return this value
		if(name == cookieToFind) {
			return value;
		}
	}
}