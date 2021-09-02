/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/


 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);



    /*===== Mobile menu show/hide =====*/
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
   
      if (toggle && nav) {
      toggle.addEventListener("click", () => {
         nav.classList.toggle("show");
         toggle.classList.toggle("toggle");
      });
      }
   };
   showMenu("nav-toggle", "nav-menu");

   /*===== End of Mobile menu show/hide =====*/

   /*===== Hide mobile menu on links click =====*/
   function linkAction() {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show");
      const toggle = document.getElementById("nav-toggle");
      toggle.classList.remove("toggle");
   }
   const navLinks = document.querySelectorAll(".nav__link");
   
   navLinks.forEach((n) => n.addEventListener("click", (e)=>{ 
      //if mobile menu, then hide after click on link 
      e.preventDefault();    
      linkAction();

      $(".nav__list a").removeClass("active");
      n.classList.add("active");
      var target = n.hash;
	    $target = $(target);

       //$('.nav__menu a[href="' + target + '"').classList.add("active");

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
   }));

   /* ===== end of hide mobile mene on links click =====*/


   /*----------------------------------------------------*/
   /* Smooth Scrolling
   ------------------------------------------------------ */
   
   /*===== REMOVE MENU MOBILE =====*/
   
   /*===== SCROLL SECTIONS ACTIVE LINK =====*/
   /* const sections = document.querySelectorAll("section[id]");

   window.addEventListener("scroll", scrollActive);

   function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document
         .querySelector(".nav__menu a[href*=" + sectionId + "]")
         .classList.add("active");
      } else {
         document
         .querySelector(".nav__menu a[href*=" + sectionId + "]")
         .classList.remove("active");
      }
   });
} */
   /* const navLink = document.querySelectorAll(".nav__link");
   navLink.forEach((n) => n.addEventListener("click", linkAction)); */

   /* const markActive =() => {
       $(".nav__link").classList.remove("active");
       
	    var target = this.hash;
	    $target = $(target);

       $('.nav__menu a[href="' + target + '"').classList.add("active");

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });       
       
	}; */


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	/* var sections = $("section");
	var navigation_links = $(".nav__link");

   document.querySelector(".nav__menu a").classList.remove("active");
	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
         var sectionId = active_section.attr("id");
			if (direction === "up") {
            active_section = active_section.prev();            
         }
         //document.querySelector('.nav__menu a[href="#' + sectionId + '"]').classList.add("active"); 
			
      },
		offset: '35%'
	}); */


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('.nav');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });


});








