(function( $ ) {
  	$.fn.cookieNotify = function(element) {
		this.element = element;
		if (this.element) {
			this.element.find('a.cookie-close').bind('click',jQuery.proxy(this,'hideNotice'));
		}
  	};
	
	$.fn.hideNotice = function(e) {
		e.preventDefault();
		if (this.element) {
			//$(this.element).slideUp('slow');
			//var height = $('#cookie-notify').height() + 20 * -1;
			$(this.element).animate({'height': '0px', 'padding-top': 0, 'padding-bottom': 0},500);
			this.noticeSeen();
		}
	};
		
	$.fn.noticeSeen = function () {
		$.ajax({
		  url: site_url+'ajax/cookies',
		  success: function(data) {
		  },
		  error : function(data) {
		  }
		});
	}
})( jQuery );