
if (window.top === window) {
	if (window.jQuery) {  
    // jQuery is loaded  
	} else {
    	var s1 = document.createElement('script');
		s1.type = 'text/javascript';
		s1.src = safari.extension.baseURI + 'jquery-3.1.1.min.js';
		document.head.appendChild(s1);
	}
}