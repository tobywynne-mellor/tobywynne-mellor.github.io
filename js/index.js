$(document).ready(function(){
  $('.item').each(function(i){
    setTimeout(function(){
      $('.item').eq(i).addClass('is-showing');
    },150*(i+1));
  });
});


$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll > 180) {
    $('.scroller').css("opacity", "1");
    $('.scroller').css("transform", "translateX(0px)");
		$('.scroller').css("visibility", "visible");
  }else {
    $('.scroller').css("opacity", "0");
    $('.scroller').css("transform", "translateX(40px)");
    $('.scroller').css("visibility", "hidden"); 
  }
});

$(function(){$(".scroller").click(function(){$("html,body").animate({scrollTop:$("html").offset().top},"1000");return false})})