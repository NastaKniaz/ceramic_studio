import '../sass/style.scss'
import {setupCounter} from '../counter.js'


// setupCounter(document.querySelector('#counter'));

$(document).ready(function () {
    $('.portfolio__carousel').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendDots: $('.slick-slider-dots'),
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/icons/left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/icons/right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 1919,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint:769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint:577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
})
    ;

