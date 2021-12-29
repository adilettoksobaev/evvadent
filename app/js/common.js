$(function() {

    $('.certificates').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        speed: 300,
        prevArrow: '<img class="prev-arrow" src="./img/prev.png">',
        nextArrow: '<img class="next-arrow" src="./img/next.png">'
    });

    $('.main-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        prevArrow: '<img class="prev-arrow" src="./img/prev.png">',
        nextArrow: '<img class="next-arrow" src="./img/next.png">'
    });

    $('.our-works-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        speed: 300
    });

    $('.doctors-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        speed: 300,
        prevArrow: '<img class="prev-arrow" src="./img/prev.png">',
        nextArrow: '<img class="next-arrow" src="./img/next.png">'
    });

    $('.reviews-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        speed: 300
    });

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

    $("#sign-up-1").submit(function() {
        $.ajax({
            type: "POST",
            url: "../../mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert(true);
            // $(this).find("input").val("");
            // Fancybox.close();
            // setTimeout(() => {
            //     Fancybox.show([{ src: "#thanks-sign-up", type: "inline" }]);
            // }, 200);
        });
        return false;
    });

});
