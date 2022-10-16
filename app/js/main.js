$(function(){
    $(".menu a, .logo, .header__btn").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.menu__btn, .menu a').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });

});