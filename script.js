$('.overlay').on('click', function(e) {
	$('.login').removeClass('z-1');	
	$('.pKiri').removeClass('pMuncul');
	$('.pKanan').removeClass('pMuncul');
	$('.qKiri').addClass('qMuncul');
	$('.qKanan').addClass('qMuncul');

		e.preventDefault();
});