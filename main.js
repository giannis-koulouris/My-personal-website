$(document).ready(function(){
    var scrollLink = $('.scroll');
    //navbad toggle
    $(".menu-toggle").click(function(){
        $('.navbar').toggleClass('show');
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

});