$(function(){
	// Here's How it Works Button Styles and Instructions
	$('.ia-instructions-trigger').on('click', function(e){
		e.preventDefault();
		if(!($(this).hasClass('is-active'))){
			// show or hide instructions
			$('.ia-instructions-trigger').removeClass('is-active');
			$(this).addClass('is-active');

			// switch instructional screenshot
			var thisHowTo = $(this).attr('id');
			var screenshotURL = "images/" + thisHowTo + ".png";
			$('.ia-instruction-image').attr('src', screenshotURL);
		}
	});

	// Show FAQ
	$('.ia-faq-trigger').on('click', function(e){
		$('.ia-faq').show();
	})
})