$(function() {
	//click open mobile side menu
	$("#mobile-menu").click(function() {
 	 	$('.side-menu').addClass('open');
  	});
	$("#close-menu").click(function() {
 		 $('.side-menu').removeClass('open');
  	});

	// Caching The Scroll Top element
	var scrollButton = $("#topped");
	$(window).scroll(function () {
		$(this).scrollTop() >= 500 ? scrollButton.show() : scrollButton.hide();
	});

	// Click on Button To Scroll top
	scrollButton.click(function(){
		$("html,body").animate({scrollTop:0},1000);
	});

	// Smooth Scroll To Div
    $('.menu li a, .browse-all a, .portfolio-item a, .side-nav a').click( function(){
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 70
        },1000);
    });

	//mini header
	$(window).scroll(function () {
		var sc = $(window).scrollTop()
		if (sc > 500) {
			$("#header").addClass("small")
		}
		else {
			$("#header").removeClass("small")
		}
	});

    //tabs
    $('#tabs li').click(function(){
     	var thisClass = this.className.slice(0,2);
     	$('div.t1').hide();
     	$('div.t2').hide();
     	$('div.t3').hide();
     	$('div.' + thisClass).fadeIn(500);
     	$('#tabs li').removeClass('active');
     	$(this).addClass('active');
     	return false;
     });
     
    $('li.t1').click();

	//feedbackSlider
	$('.bxslider1').bxSlider({
		auto: true,
		speed: 600,
		controls: false,
	});
		//contact map image
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
	  $('.bg-map').css({
	    '-webit-transform': translate,
	    '-moz-transform': translate,
	    'transform': translate
	  });
	   window.requestAnimationFrame(moveBackground);
	}
	$(window).on('mousemove click', function(e) {
	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	  lFollowY = (10 * lMouseY) / 100;
	});
	moveBackground();

})
