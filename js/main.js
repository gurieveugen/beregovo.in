$(window).load(function() {
	// =========================================================
	// FLEXSLIDER
	// =========================================================
	$('.flexslider').flexslider({
		animation: "slide"
	});
});

$(document).ready(function(){
	// =========================================================
	// TAB CLICK
	// =========================================================
	$('.block-tabs .links li a').click(function(e){
		var show_block = $(this).data('id');

		
		$('.block-tabs .links li a').each(function(){ $(this).removeClass('active') });
		$(this).addClass('active');

		$('.block-tabs .tabs li').each(function(){ $(this).removeClass('show') });
		$(show_block).addClass('show');

		e.preventDefault();
	});
});