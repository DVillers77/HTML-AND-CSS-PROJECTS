// Existing code from Basic_HTML_1.html (example)
alert("Hello, World!"); 

// --- New function for Basic_HTML_2.html starts here ---
// Note: Function name 'My_First_Function' uses Pascal/snake_case hybrid per course instruction,
//       while 'camelCase' (e.g., myFirstFunction) is standard for JS functions.
function My_First_Function () {
	var message = "Kiss me, I'm Irish!"; // Changed variable name from String to message
	var result = message.fontcolor("green"); // Still using fontcolor as per course, but noted for future
	// Note: Corrected course example's innerHTML assignment syntax that was split across two lines
	document.getElementById("Irish").innerHTML = result; 
}