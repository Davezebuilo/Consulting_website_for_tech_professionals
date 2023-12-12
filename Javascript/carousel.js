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
                items: 1.5,
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
                items: 1.5
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
