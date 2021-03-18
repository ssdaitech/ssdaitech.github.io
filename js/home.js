$(document).ready(function(){
	///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 200) {
        $('.navbar').addClass("navbar-fixed-top");
        // add padding top to show content behind navbar
      
      }else{
        $('.navbar').removeClass("navbar-fixed-top");
         // remove padding top from body
       
      }   
  });
} // end if

	  $( "input" ).focus(function() {
      	$(this).parent().addClass('focuss');
      });

      $('input').blur(function(){
      	$(this).parent().removeClass('focuss');
      });
  $(document).on("scroll", onScroll);

  $(document).on('click','.nav li a',function(e){
  	e.preventDefault();
  	$(document).off("scroll");
  	var idchk = $(this).attr('href');
  	$('.nav li').removeClass('active');
  	$(this).parent().addClass('active');
  	$('html,body').animate({scrollTop:$('#' + idchk).offset().top},1000,'swing',function(){
  		$(document).on("scroll", onScroll);
  	});

  });     

  function onScroll(event){

    var scrollPos = $(document).scrollTop();
    $('.nav li').each(function (index) {
    	// alert(index);
        var currLink = $(this).find('a');
        var refElement = currLink.attr('href');
        // alert($('#' + refElement).position().top);
        if ($('#' + refElement).offset().top <= scrollPos && $('#' + refElement).offset().top + $('#'+refElement).outerHeight() > scrollPos){
            $('.nav li').removeClass("active");
            $(this).addClass("active");
        }
        // else{
        //      $('.nav li').removeClass("active");
        // }
    });
}

onScroll();
});