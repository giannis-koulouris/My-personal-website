$(document).ready(function(){
    var scrollLink = $('.scroll');

    
    //navbad toggle for mobile
    $(".menu-toggle").click(function(){
        $('.navbar').toggleClass('show');
    });

    //hamburger menu animation
    $(".menu-toggle").click(function(){
        $(".hamburger").toggleClass('close');
    });

    //smooth scrolling
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    });

    //active link switch
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top - 20;
            if( sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //fixed navbar animation
    $(window).scroll(function(){
        if($(this).scrollTop()>=60){
            $(".navbar").addClass("fixed-navbar");
        }else{
            $(".navbar").removeClass("fixed-navbar");
        }
    });

    //scroll to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".scroll-top").fadeIn(200);
        } else {
            $(".scroll-top").fadeOut(200);
        }
    });

    $(".scroll-top").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
      });


      //AOS Animation Settings

      AOS.init({
        // Global settings
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      
        // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      });

});