var preloader = document.getElementById('loading-screen');

function loader() {
    preloader.style.display = 'none';
}

function coPying() {
    var copyText = document.getElementById("copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById('copy-text').value = ("Copied the text: " + copyText.value);
}
$(document).ready(function() {
    $('.sign-up-modal-box').hide();
    $('.next-btn-cont').click(function() {
        $('.sign-up-page-form').hide();
        $('.sign-up-modal-box').fadeIn();
    })
    $('.chevron-style').hide();
    $('.click-profile').click(function() {
        $('.chevron-style').slideToggle('fast');
    })
    $('.drop-menu , .d-m-data , .drop-menu-w-and-t , .p-t-data , .v-a-data , .business-data , .f-and-n-data').hide();
    $('.pos-re').hover(function() {
        $('.drop-menu').stop().fadeToggle('fast');
    });
    $('.drop-menu-w-t').hover(function() {
        $('.drop-menu-w-and-t').stop().fadeToggle('fast');
    })
    $('.d-m').hover(function() {
        $('.d-m-data').stop().fadeToggle('fast');
    });
    $('.p-and-t').hover(function() {
        $('.p-t-data').stop().fadeToggle('fast');
    });
    $('.v-a').hover(function() {
        $('.v-a-data').stop().fadeToggle('fast');
    });
    $('.business').hover(function() {
        $('.business-data').stop().fadeToggle('fast');
    });
    $('.fun-and-lifestyle').hover(function() {
        $('.f-and-n-data').stop().fadeToggle('fast');
    });
    $(window).resize(function() {
        if ($(window).width() > 1500) {
            $('.custom-ul.working-nav-ul').removeClass('d-none');
        }
        if ($(window).width() <= 1500) {
            $('.custom-ul.working-nav-ul').addClass('d-none');
        }
    });
    $('.bar').click(function() {
        $('.custom-ul.working-nav-ul').toggleClass('d-none', 'slow');
    })
    $('.burger-menu').click(function() {
        $(this).toggleClass('menu-open');
    });

    // $(".dropdown").hover(
    //     function() {
    //         $('.dropdown-menu', this).stop(true, true).slideDown("fast");
    //         $(this).toggleClass('open');
    //     },
    //     function() {
    //         $('.dropdown-menu', this).stop(true, true).slideUp("fast");
    //         $(this).toggleClass('open');
    //     }
    // );

    // $(".dropdown").hover(
    //     function() {
    //         $('.dropdown-menu', this).stop(true, true).slideDown("fast");
    //         $(this).toggleClass('open');
    //     },
    //     function() {
    //         $('.dropdown-menu', this).stop(true, true).slideUp("fast");
    //         $(this).toggleClass('open');
    //     }
    // );


    $(window).resize(function() {
        if ($(window).width() >= 980) {
            $(".navbar .dropdown-toggle").hover(function() {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            $(".navbar .dropdown-menu").mouseleave(function() {
                $(this).removeClass("show");
            });
        }
    });

});
$('.actual-convers').hide();
$('.person-chat-profile').click(function() {
    $('.conversation-image').hide();
    $('.actual-convers').show();
})
$(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        loop: true,
    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        nextArrow: '<i class="fas fa-chevron-right slider-right-arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left slider-left-arrow"></i>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    loop: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

})
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function() {
        $(".scroll").click(function() {
            $("html,body").animate({
                scrollTop: $(".top").offset().top
            }, "1000");
            return false
        })
    })
})
$('.responsive').slick({
    dots: false,
    infinite: false,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<i class="fas fa-chevron-right slider-right-arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left slider-left-arrow freelancer-arrow"></i>',
    loop: true,
    infinite: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider-testimonial').slick({
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

});

$('.slider-fors').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1500,
    asNavFor: '.slider-navs',
    autoplay: true,
    loop: true,
    infinite: true
});
$('.slider-navs').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-fors',
    dots: false,
    speed: 1500,
    centerMode: true,
    focusOnSelect: false,
    autoplay: true,
    loop: true,
    infinite: true,
    arrows: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// $(document).ready(function() {
//     $('.overlay-wrapper').hide();
//     $('.side-bar-icon').click(function() {
//         $('.side').addClass('side-transform');
//         $('.overlay-wrapper').fadeIn(500);
//     })
//     $('.overlay-wrapper').click(function() {
//         $('.side').removeClass('side-transform');
//         $('.side').addClass('trans');
//         $('.overlay-wrapper').fadeOut(500);
//     })
//     $('.chev').click(function() {
//         $('.chev-down').show('1000');
//         $("i", this).toggleClass("fas fa-chevron-down fas fa-chevron-up");
//     });
//     $('#pos-re').click(function() {
//         $('#drop-toggle').fadeToggle('slow');
//         $('.chev-down i').toggleClass('toggleclr')
//     });
//     $('#drop-menu-w-t').click(function() {
//         $('#drop-menu-w-and-t').fadeToggle('slow');
//     });
//     $('#d-m').click(function() {
//         $('#d-m-data').fadeToggle('slow');
//     });
//     $('#p-t').click(function() {
//         $('#p-t-data').fadeToggle('slow');
//     });
//     $('#v-a').click(function() {
//         $('#v-a-data').fadeToggle('slow');
//     });
//     $('#business').click(function() {
//         $('#b-a-data').fadeToggle('slow');
//     });
// })