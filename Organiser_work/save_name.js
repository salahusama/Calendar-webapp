function createCookie(cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = "name" + "=" + cvalue + "; " + expires;
	// open organiser - window.open("home.html", "_self"); - does not work
	//
	window.open("home.html");
	window.close("_self");
}