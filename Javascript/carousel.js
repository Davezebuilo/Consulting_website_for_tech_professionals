$(document).ready(function(){
    $(".carousel1").owlCarousel({
        items:3.5,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1.5
            },
            768: {
                items: 2.2,
                margin: 20
            },
            1280: {
                margin: 20
            }
        }
    });
    
  });

  $(document).ready(function(){
    $(".carousel2").owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1,
                margin: 290
            },
            1280: {
                items: 3,
                margin: 15
            }
        }
    });
  });

  $(document).ready(function(){
    $(".carousel3").owlCarousel({
        // items:3,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout: 10000,
        autoplayHoverPause:true,
        stagePadding: 50,
        responsive: {
            0: {
                items: 1.2,
                margin: 30,
                stagePadding: 5,
                autoplayTimeout: 5000
            },
            428: {
                items: 1.2,
                margin: 5,
                stagePadding: 5,
                autoplayTimeout: 5000
            },
            768: {
                items: 2.3,
                margin: 400
            },
            1280: {
                items: 3,
                margin: 280
            },
            1440: {
                items: 3,
            }
        }
    });
  });

