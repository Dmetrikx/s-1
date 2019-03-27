(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

    //View controllers for the Team page
    $("#gallery-view").click(function(event){
        $(".team-gallery-view").removeClass("hidden")
        $(".team-bio-view").addClass("hidden")
    });

    $("#bio-view").click(function(event){
        $(".team-gallery-view").addClass("hidden")
        $(".team-bio-view").removeClass("hidden")
    });

    //Switch main or team page to mobile if screen size small enough
    mobilize();
    $( window ).resize(function() {
      mobilize();
    });



})(jQuery); // End of use strict

function mobilize(){
    var page_title = document.location.href.match(/[^\/]+$/)

    if(page_title == null || page_title[0] == "index.html" || page_title[0] == "jobs.html"){
        var new_width = $( window ).width()
        if(new_width < 768){
            $("#notmobile").addClass("hidden")
            $("#mobile").removeClass("hidden")
            $(".logo").addClass("show")
            $(".logo-white").addClass("hidden")
        }else{
            $(".logo").removeClass("show")
            $(".logo-white").removeClass("hidden")
            $("#notmobile").removeClass("hidden")
            $("#mobile").addClass("hidden")
        }
    }
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-86658656-2', 'auto');
ga('send', 'pageview');