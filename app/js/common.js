$(function() {

    setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done')) {
          preloader.classList.add('done');
        }
    }, 1000);

    $(".btn_mnu").click(function() {
        $(this).toggleClass("active");
        $(".menu").toggleClass("open");
        $(".menu__bg").toggleClass("open");
    });
    
    $( ".menu li a" ).click(function() {
        $( ".menu" ).removeClass("open");
        $(".menu__bg").removeClass("open");
        $( ".btn_mnu" ).removeClass("active");
    });

    $( ".menu__bg" ).click(function() {
        $( ".menu" ).removeClass("open");
        $(".menu__bg").removeClass("open");
        $( ".btn_mnu" ).removeClass("active");
    });

    setTimeout(function(){
        $('.count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-stop') }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $this.text(Math.ceil(now));
                }
            });
        });
    }, 1500);


    function textCut(text, limit) {
        text = text.trim();
        if( text.length <= limit) return text;
      
        text = text.slice(0, limit);
      
        return text.trim() + "...";
    }

    setTimeout(() => {
        $(".reviews-section .review").each(function() {
            const limit = 335;
            const text = $(this).find('.review__desc').text();
            const shortText = textCut(text, limit);
            const reviewText = $(this).find('.review__desc');
            reviewText.html(shortText);
            if(text.length > limit) {
                reviewText.append(' <a href="reviews.html">Читать далее</a>');
            }
        });
    }, 1000);



    $('.certificates').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        speed: 300,
        infinite: false,
        prevArrow: '<img class="prev-arrow" src="./img/prev.png">',
        nextArrow: '<img class="next-arrow" src="./img/next.png">',
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.main-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        prevArrow: '<img class="prev-arrow" src="./img/prev.png">',
        nextArrow: '<img class="next-arrow" src="./img/next.png">'
    });

    $('.mobile-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.our-works-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        speed: 300,
        infinite: false,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.doctors-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        speed: 300,
        prevArrow: '<img class="prev-arrow" src="./img/prev.png">',
        nextArrow: '<img class="next-arrow" src="./img/next.png">',
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    setTimeout(() => {
        $('.reviews-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            dots: true,
            speed: 300,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }, 1200);

    $('.person').find('.btn').hover(
        function() {
            console.log(true)
            $(this).parents('.person').addClass('active');
        }, function() {
            $(this).parents('.person').removeClass('active');
        }
    );

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn(500);
        } else {
            $('#toTop').fadeOut();
        }
    });

    $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
    });

    const els = document.querySelector('.header');
    let scrolled;

    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 134) {
            els.classList.add('f-nav');
        } else {
            els.classList.remove('f-nav');
        }
    };

    $("#sign-up").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            Fancybox.close();
            setTimeout(() => {
                Fancybox.show([{ src: "#thanks-sign-up", type: "inline" }]);
            }, 200);
            $("#sign-up").trigger("reset");
        });
        return false;
    });

});

document.addEventListener('DOMContentLoaded', () => {
    new WOW().init();
});
