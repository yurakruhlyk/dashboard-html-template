$(document).ready(
	$('.nav-item').filter('.dropdown').click(function(e) {
		e.preventDefault();
		
		$(this).toggleClass('open');
	})
)