/* Author:

*/

$(document).ready(function() {
	$(document).cookieNotify($('#cookie-notify'));
	var active = $("header .navigation").attr("data-active");
	$("header .navigation li").each(function(index,elem) {
		
		if ($(elem).hasClass(active)) {
			$(elem).addClass("active");
		}
	})


});



