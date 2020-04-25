 $(document).scroll(function() {
     var scrollTop = $(this).scrollTop();
     if (scrollTop > 50) { $('body').addClass('stickyHeader'); } else {
         $('body').removeClass('stickyHeader');
     }
 });
 $(document).ready(function() {
     $('.slider').bxSlider({ pager: false, });
     $(".according-header").click(function() {
         if ($(this).hasClass('active')) {
             $(this).removeClass('active').siblings('.according-content').slideUp("slow");
         } else {
             $(this).addClass('active').siblings('.according-content').slideDown().parent('.according-structure').siblings().children('.according-header').removeClass('active').siblings('.according-content').slideUp();
         }
     });
     $(".menu-icon").click(function() {
         $(".menu-list").toggleClass('menu-active');
         if ($(".menu-list").hasClass('menu-active')) { $('body').addClass('menu-top'); } else { $('body').removeClass('menu-top'); }
     });
     $(".search-btn").click(function() { $('body').addClass('search-visible'); });
     $(".closebtn").click(function() {
         $('body').removeClass('search-visible');
     });

     var scrollTop = $(".scrollTop");

     $(window).scroll(function() {
         var topPos = $(this).scrollTop();
         if (topPos > 100) {
             $(scrollTop).css({ "opacity": "1", "right": "55px" });

         } else {
             $(scrollTop).css({ "opacity": "0", "right": "-80px" });
         }

     });
     $(scrollTop).click(function() {
         $('html, body').animate({
             scrollTop: 0
         }, 800);
         return false;

     });

 });