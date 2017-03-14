
if (window.top === window) {
	window.addEventListener("keydown", keypressHandlerForAllOpenPages, false);

	//filter events for out tab by URL
	const patt = new RegExp("vk.com");
	if (patt.test(window.location.host)) {
		safari.self.addEventListener("message", vkCMD, false);

		//this is example how to track element change event
		// var observer11 = new MutationObserver(trackTitleChangedHandler),
  //       elTarget = document.querySelector('div.top_audio_player_title_wrap'),
  //       objConfig = {
  //           childList: true,
  //           subtree : false,
  //           attributes: false, 
  //           characterData : false
  //       };
		// observer11.observe(elTarget, objConfig);
		// observer11.disconnect(); //unUbserve
		//______
		// function trackTitleChangedHandler (mutations) {
	    //    mutations.forEach(function(mutation){
		// 	console.log(mutation.type);
		// });    
		// }

		var s1 = document.createElement('script');
		s1.type = 'text/javascript';
		s1.src = safari.extension.baseURI + 'contentbridge.js';
		document.head.appendChild(s1);
	}	
}